# 🎯 ACHARYA - Career Forging Platform

A comprehensive career management platform that connects candidates, recruiters, and administrators through an intelligent AI-powered system.

## 🌟 Features

### 👥 Multi-Role System
- **Candidates:** Profile management, job applications, mock tests, company tests, open source projects
- **Recruiters:** Job posting, application screening, candidate management, test assignment
- **Admins:** System monitoring, user management, analytics

### 🤖 AI-Powered Features
- **ACHARYA Intelligent Screening Algorithm (AISA):** AI-powered resume analysis and application screening
- **Smart Job Matching:** Intelligent candidate-job matching system
- **Automated Test Assignment:** Company-specific test management

### 📊 Real-Time Progress Tracking
- **Profile Completion:** Real-time progress tracking for candidate profiles
- **Application Status:** Live updates on job application status
- **Test Results:** Instant feedback on mock and company tests

### 🎨 Modern UI/UX
- **Glassmorphism Design:** Modern glass-like interface with blur effects
- **Responsive Design:** Works seamlessly on all devices
- **Loading Animations:** Engaging loading screens with smooth transitions

## 🚀 Tech Stack

### Frontend
- **HTML5:** Semantic markup and modern structure
- **CSS3:** Advanced styling with glassmorphism effects
- **JavaScript (ES6+):** Modern JavaScript with async/await
- **Google Fonts:** Inter and Orbitron for typography
- **JWT Authentication:** Secure token-based authentication

### Backend
- **FastAPI:** Modern, fast Python web framework
- **MongoDB:** NoSQL database with Motor async driver
- **Google Gemini AI:** AI-powered resume analysis and screening
- **JWT:** JSON Web Token authentication
- **Uvicorn:** ASGI server for production deployment

### AI Integration
- **Google Gemini 2.0 Flash:** Advanced AI for resume analysis
- **ACHARYA Algorithm:** Custom intelligent screening system
- **Smart Grading:** Automated application scoring (1-5 scale)

## 📁 Project Structure

```
ACHARYA/
├── main.py                          # FastAPI backend server
├── index.html                       # Landing page with loading animation
├── styles.css                       # Global styles and glassmorphism
├── script.js                        # Authentication and navigation logic
├── candidate/                       # Candidate-specific pages
│   ├── candidate_dashboard.html     # Main candidate dashboard
│   ├── candidate_profile.html       # Profile management with real-time progress
│   ├── candidate_apply.html         # Job application interface
│   ├── candidate_mock_tests.html    # Mock test platform
│   ├── candidate_company_tests.html # Company-specific tests
│   ├── candidate_learning.html      # Learning resources
│   ├── candidate_resources.html     # Additional resources
│   ├── candidate_chat.html          # Communication platform
│   ├── candidate_internship.html    # Open source contribution platform
│   └── *.js, *.css                 # Associated scripts and styles
├── recruiter/                       # Recruiter-specific pages
│   ├── recruiter_dashboard.html     # Main recruiter dashboard
│   ├── recruiter_jobs.html          # Job posting and management
│   ├── recruiter_applications.html  # Application screening with AI
│   └── *.js, *.css                 # Associated scripts and styles
├── admin/                           # Admin-specific pages
│   ├── admin_activity.html          # System activity monitoring
│   ├── admin_jobs.html              # Job management
│   ├── admin_clients.html           # User management
│   └── *.js, *.css                 # Associated scripts and styles
└── requirements.txt                 # Python dependencies
```

## 🛠️ Installation & Setup

### Prerequisites
- Python 3.8+
- MongoDB
- Google Gemini AI API key

### Backend Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd ACHARYA
```

2. **Install Python dependencies:**
```bash
pip install -r requirements.txt
```

3. **Set up environment variables:**
Create a `.env` file in the root directory:
```env
MONGODB_URL=mongodb://localhost:27017
GEMINI_API_KEY=your_gemini_api_key_here
JWT_SECRET_KEY=your_jwt_secret_key_here
```

4. **Start MongoDB:**
```bash
# On Windows
mongod

# On macOS/Linux
sudo systemctl start mongod
```

5. **Run the FastAPI server:**
```bash
python main.py
```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. **Serve static files:**
The FastAPI server automatically serves static files from the root directory.

2. **Access the application:**
Open `http://localhost:8000` in your browser.

## 🚀 Deployment Options

### Option 1: Railway (Recommended)

#### Backend Deployment
1. **Create Railway account:** [railway.app](https://railway.app)
2. **Connect GitHub repository**
3. **Add environment variables:**
   - `MONGODB_URL`: Your MongoDB connection string
   - `GEMINI_API_KEY`: Your Google Gemini API key
   - `JWT_SECRET_KEY`: Your JWT secret key
4. **Deploy:** Railway will automatically detect FastAPI and deploy

#### Frontend Deployment
1. **Use Railway's static file serving** or
2. **Deploy to Vercel/Netlify** for better static file performance

### Option 2: Heroku

#### Backend Deployment
1. **Install Heroku CLI**
2. **Create Heroku app:**
```bash
heroku create your-acharya-app
```

3. **Add MongoDB addon:**
```bash
heroku addons:create mongolab
```

4. **Set environment variables:**
```bash
heroku config:set GEMINI_API_KEY=your_api_key
heroku config:set JWT_SECRET_KEY=your_secret_key
```

5. **Deploy:**
```bash
git push heroku main
```

### Option 3: DigitalOcean App Platform

1. **Create DigitalOcean account**
2. **Connect GitHub repository**
3. **Configure build settings:**
   - Build command: `pip install -r requirements.txt`
   - Run command: `python main.py`
4. **Add environment variables**
5. **Deploy**

### Option 4: AWS/GCP/Azure

#### Backend (FastAPI)
- **AWS:** Use Elastic Beanstalk or ECS
- **GCP:** Use App Engine or Cloud Run
- **Azure:** Use App Service or Container Instances

#### Frontend (Static Files)
- **AWS S3 + CloudFront**
- **GCP Cloud Storage + CDN**
- **Azure Blob Storage + CDN**

## 🔧 Configuration

### Environment Variables
```env
# Database
MONGODB_URL=mongodb://localhost:27017/acharya

# AI Services
GEMINI_API_KEY=your_gemini_api_key

# Security
JWT_SECRET_KEY=your_jwt_secret_key

# Server
HOST=0.0.0.0
PORT=8000
```

### API Endpoints

#### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

#### Users
- `GET /api/users/{username}` - Get user profile
- `PUT /api/users/{username}` - Update user profile

#### Jobs
- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create new job
- `PUT /api/jobs/{job_id}` - Update job
- `DELETE /api/jobs/{job_id}` - Delete job

#### Applications
- `GET /api/applications` - Get applications
- `POST /api/applications` - Submit application
- `PUT /api/applications/{app_id}` - Update application

#### Tests
- `GET /api/candidate/company-tests` - Get assigned tests
- `POST /api/recruiter/assign-test` - Assign test to candidate

## 🎨 UI/UX Features

### Design System
- **Color Palette:** Purple gradient (#667eea to #764ba2)
- **Typography:** Inter (body) and Orbitron (headings)
- **Effects:** Glassmorphism with backdrop-filter
- **Animations:** Smooth transitions and loading effects

### Responsive Design
- **Mobile-first approach**
- **Breakpoints:** 480px, 768px, 1200px
- **Flexible layouts** with CSS Grid and Flexbox

## 🤖 AI Features

### ACHARYA Intelligent Screening Algorithm (AISA)
- **Resume Analysis:** AI-powered resume parsing and analysis
- **Job Matching:** Intelligent candidate-job matching
- **Application Screening:** Automated application evaluation
- **Grading System:** 1-5 scale with detailed feedback

### Smart Features
- **Real-time Progress Tracking:** Live profile completion updates
- **Automated Test Assignment:** Company-specific test management
- **Intelligent Notifications:** Context-aware user feedback

## 🔒 Security Features

- **JWT Authentication:** Secure token-based authentication
- **Role-based Access Control:** Admin, Recruiter, Candidate roles
- **Input Validation:** Server-side data validation
- **CORS Protection:** Cross-origin resource sharing security

## 📊 Performance Optimization

- **Static File Caching:** Efficient static file serving
- **Database Indexing:** Optimized MongoDB queries
- **Lazy Loading:** Progressive content loading
- **Minification:** Optimized CSS and JavaScript

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration and login
- [ ] Role-based access control
- [ ] Profile management and real-time progress
- [ ] Job posting and application
- [ ] AI-powered application screening
- [ ] Test assignment and completion
- [ ] Responsive design on different devices

### API Testing
```bash
# Test authentication
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"test","password":"test"}'

# Test job creation
curl -X POST http://localhost:8000/api/jobs \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Job","description":"Test Description"}'
```

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] Set up environment variables
- [ ] Configure database connection
- [ ] Set up AI API keys
- [ ] Test all features locally
- [ ] Optimize static files

### Deployment
- [ ] Choose deployment platform
- [ ] Configure build settings
- [ ] Set up environment variables
- [ ] Deploy backend
- [ ] Deploy frontend
- [ ] Configure custom domain (optional)

### Post-Deployment
- [ ] Test all features on live site
- [ ] Monitor performance
- [ ] Set up logging and monitoring
- [ ] Configure backups

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

## 🎯 Roadmap

### Future Features
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Video interview integration
- [ ] Multi-language support
- [ ] Advanced AI features
- [ ] Real-time collaboration tools

---

**ACHARYA - Empowering careers through intelligent technology** 🚀