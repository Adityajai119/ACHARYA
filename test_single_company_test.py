#!/usr/bin/env python3
"""
Simple test to assign one company test and check the test ID
"""

import requests
import json

# Base URL
BASE_URL = "http://localhost:8000"

def test_single_company_test():
    print("🧪 Testing Single Company Test Assignment")
    print("=" * 50)
    
    # Login as recruiter
    print("\n1. Logging in as recruiter...")
    login_data = {
        "username": "recruiter1",
        "password": "password123"
    }
    
    try:
        response = requests.post(f"{BASE_URL}/api/login", json=login_data)
        if response.status_code == 200:
            recruiter_token = response.json()["access_token"]
            print("✅ Recruiter login successful")
        else:
            print(f"❌ Recruiter login failed: {response.status_code}")
            return
    except Exception as e:
        print(f"❌ Error during recruiter login: {e}")
        return
    
    # Assign company test
    print("\n2. Assigning company test...")
    test_data = {
        "candidate": "candidate1",
        "companyName": "Google",
        "testType": "Technical Assessment",
        "duration": 30,
        "questions": [
            {
                "question": "Write a function to reverse a string in JavaScript",
                "correctAnswer": "function reverseString(str) { return str.split('').reverse().join(''); }"
            }
        ]
    }
    
    try:
        response = requests.post(
            f"{BASE_URL}/api/recruiter/assign-company-test",
            json=test_data,
            headers={"Authorization": f"Bearer {recruiter_token}"}
        )
        if response.status_code == 200:
            result = response.json()
            test_id = result.get("test_id")
            print(f"✅ Company test assigned successfully!")
            print(f"   Test ID: '{test_id}'")
            print(f"   Test ID length: {len(test_id)}")
            print(f"   Test ID type: {type(test_id)}")
            
            # Test the test ID format
            if len(test_id) == 24:
                print("✅ Test ID has correct length (24 characters)")
            else:
                print(f"❌ Test ID has wrong length: {len(test_id)} (should be 24)")
                
        else:
            print(f"❌ Company test assignment failed: {response.status_code} - {response.text}")
            return
    except Exception as e:
        print(f"❌ Error during company test assignment: {e}")
        return
    
    print("\n" + "=" * 50)
    print("🎉 Single Company Test Test Complete!")

if __name__ == "__main__":
    test_single_company_test()
