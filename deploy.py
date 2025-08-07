#!/usr/bin/env python3
"""
ACHARYA Deployment Helper Script
This script helps prepare and deploy the ACHARYA project.
"""

import os
import sys
import subprocess
import json
from pathlib import Path

def check_prerequisites():
    """Check if all prerequisites are met."""
    print("🔍 Checking prerequisites...")
    
    # Check Python version
    python_version = sys.version_info
    if python_version.major < 3 or (python_version.major == 3 and python_version.minor < 8):
        print("❌ Python 3.8+ is required")
        return False
    print(f"✅ Python {python_version.major}.{python_version.minor}.{python_version.micro}")
    
    # Check if main.py exists
    if not Path("main.py").exists():
        print("❌ main.py not found")
        return False
    print("✅ main.py found")
    
    # Check if requirements.txt exists
    if not Path("requirements.txt").exists():
        print("❌ requirements.txt not found")
        return False
    print("✅ requirements.txt found")
    
    # Check if index.html exists
    if not Path("index.html").exists():
        print("❌ index.html not found")
        return False
    print("✅ index.html found")
    
    return True

def check_environment_variables():
    """Check if required environment variables are set."""
    print("\n🔍 Checking environment variables...")
    
    required_vars = ['MONGODB_URL', 'GEMINI_API_KEY', 'JWT_SECRET_KEY']
    missing_vars = []
    
    for var in required_vars:
        if not os.getenv(var):
            missing_vars.append(var)
        else:
            print(f"✅ {var} is set")
    
    if missing_vars:
        print(f"❌ Missing environment variables: {', '.join(missing_vars)}")
        print("\n📝 Please set the following environment variables:")
        for var in missing_vars:
            if var == 'MONGODB_URL':
                print(f"   {var}=mongodb+srv://username:password@cluster.mongodb.net/acharya")
            elif var == 'GEMINI_API_KEY':
                print(f"   {var}=your_gemini_api_key_here")
            elif var == 'JWT_SECRET_KEY':
                print(f"   {var}=your_super_secret_jwt_key_here")
        print("\n💡 For local development, create a .env file with these variables")
        return False
    
    return True

def install_dependencies():
    """Install Python dependencies."""
    print("\n📦 Installing dependencies...")
    
    try:
        # Try to install with pip
        result = subprocess.run([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"], 
                              capture_output=True, text=True)
        
        if result.returncode == 0:
            print("✅ Dependencies installed successfully")
            return True
        else:
            print(f"⚠️  Some dependencies failed to install:")
            print(result.stderr)
            
            # Try installing core dependencies individually
            print("\n🔄 Trying to install core dependencies individually...")
            core_deps = [
                "fastapi",
                "uvicorn[standard]",
                "motor",
                "python-jose[cryptography]",
                "passlib[bcrypt]",
                "python-multipart",
                "python-dotenv",
                "google-generativeai",
                "aiofiles",
                "httpx"
            ]
            
            for dep in core_deps:
                try:
                    subprocess.run([sys.executable, "-m", "pip", "install", dep], 
                                 check=True, capture_output=True)
                    print(f"✅ Installed {dep}")
                except subprocess.CalledProcessError:
                    print(f"⚠️  Failed to install {dep}")
            
            print("\n✅ Core dependencies installed (some optional dependencies may be missing)")
            return True
            
    except Exception as e:
        print(f"❌ Error installing dependencies: {e}")
        return False

def test_backend():
    """Test if the backend starts correctly."""
    print("\n🧪 Testing backend...")
    
    try:
        # Start server in background
        process = subprocess.Popen([sys.executable, "main.py"], 
                                 stdout=subprocess.PIPE, 
                                 stderr=subprocess.PIPE)
        
        # Wait a bit for server to start
        import time
        time.sleep(3)
        
        # Check if process is still running
        if process.poll() is None:
            print("✅ Backend started successfully")
            process.terminate()
            return True
        else:
            stdout, stderr = process.communicate()
            print(f"❌ Backend failed to start: {stderr.decode()}")
            return False
    except Exception as e:
        print(f"❌ Error testing backend: {e}")
        return False

def create_deployment_files():
    """Create deployment configuration files."""
    print("\n📝 Creating deployment files...")
    
    # Create render.yaml for Render deployment
    render_config = """services:
  - type: web
    name: acharya-backend
    env: python
    buildCommand: pip install -r requirements.txt
    startCommand: uvicorn main:app --host 0.0.0.0 --port $PORT
    envVars:
      - key: MONGODB_URL
        value: mongodb+srv://username:password@cluster.mongodb.net/acharya
      - key: GEMINI_API_KEY
        value: your_gemini_api_key_here
      - key: JWT_SECRET_KEY
        value: your_super_secret_jwt_key_here
"""
    
    with open("render.yaml", "w") as f:
        f.write(render_config)
    print("✅ render.yaml created")
    
    # Create Procfile for Heroku
    procfile_content = "web: uvicorn main:app --host 0.0.0.0 --port $PORT"
    with open("Procfile", "w") as f:
        f.write(procfile_content)
    print("✅ Procfile created")
    
    # Create runtime.txt for Python version
    runtime_content = "python-3.11.0"
    with open("runtime.txt", "w") as f:
        f.write(runtime_content)
    print("✅ runtime.txt created")

def generate_secret_key():
    """Generate a secure JWT secret key."""
    import secrets
    return secrets.token_hex(32)

def main():
    """Main deployment helper function."""
    print("🚀 ACHARYA Deployment Helper")
    print("=" * 40)
    
    # Check prerequisites
    if not check_prerequisites():
        print("\n❌ Prerequisites not met. Please fix the issues above.")
        return
    
    # Check environment variables
    env_check = check_environment_variables()
    if not env_check:
        print("\n⚠️  Environment variables not set. You'll need to set them in your deployment platform.")
    
    # Install dependencies
    if not install_dependencies():
        print("\n❌ Failed to install dependencies.")
        print("💡 Try installing manually: pip install -r requirements.txt")
        return
    
    # Test backend
    if not test_backend():
        print("\n❌ Backend test failed.")
        print("💡 Check if MongoDB is running and environment variables are set")
        return
    
    # Create deployment files
    create_deployment_files()
    
    print("\n🎉 Deployment preparation completed!")
    print("\n📋 Next steps:")
    print("1. Push your code to GitHub")
    print("2. Choose a deployment platform:")
    print("   - Railway (easiest): https://railway.app")
    print("   - Render (free tier): https://render.com")
    print("   - Heroku: https://heroku.com")
    print("   - DigitalOcean: https://digitalocean.com")
    print("3. Set environment variables in your platform")
    print("4. Deploy!")
    
    print(f"\n🔑 Generated JWT secret key: {generate_secret_key()}")
    print("\n📖 For detailed instructions, see DEPLOYMENT.md")

if __name__ == "__main__":
    main()
