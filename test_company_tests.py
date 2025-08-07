#!/usr/bin/env python3
"""
Test script for company tests functionality
"""

import requests
import json

# Base URL
BASE_URL = "http://localhost:8000"

def test_company_tests():
    print("🧪 Testing Company Tests System")
    print("=" * 50)
    
    # Test 1: Login as recruiter
    print("\n1. Testing recruiter login...")
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
    
    # Test 2: Assign company test
    print("\n2. Testing company test assignment...")
    test_data = {
        "candidate": "candidate1",
        "companyName": "Google",
        "testType": "Technical Assessment",
        "duration": 30,
        "questions": [
            {
                "question": "Write a function to reverse a string in JavaScript",
                "correctAnswer": "function reverseString(str) { return str.split('').reverse().join(''); }"
            },
            {
                "question": "Explain the difference between let, const, and var in JavaScript",
                "correctAnswer": "let is block-scoped and can be reassigned, const is block-scoped and cannot be reassigned, var is function-scoped and can be reassigned."
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
            print(f"✅ Company test assigned successfully! Test ID: {test_id}")
        else:
            print(f"❌ Company test assignment failed: {response.status_code} - {response.text}")
            return
    except Exception as e:
        print(f"❌ Error during company test assignment: {e}")
        return
    
    # Test 3: Login as candidate
    print("\n3. Testing candidate login...")
    candidate_login_data = {
        "username": "candidate1",
        "password": "password123"
    }
    
    try:
        response = requests.post(f"{BASE_URL}/api/login", json=candidate_login_data)
        if response.status_code == 200:
            candidate_token = response.json()["access_token"]
            print("✅ Candidate login successful")
        else:
            print(f"❌ Candidate login failed: {response.status_code}")
            return
    except Exception as e:
        print(f"❌ Error during candidate login: {e}")
        return
    
    # Test 4: Get assigned company tests
    print("\n4. Testing get assigned company tests...")
    try:
        response = requests.get(
            f"{BASE_URL}/api/candidate/company-tests",
            headers={"Authorization": f"Bearer {candidate_token}"}
        )
        if response.status_code == 200:
            result = response.json()
            tests = result.get("tests", [])
            print(f"✅ Found {len(tests)} assigned company tests")
            if tests:
                test = tests[0]
                print(f"   - Company: {test.get('companyName')}")
                print(f"   - Type: {test.get('testType')}")
                print(f"   - Duration: {test.get('duration')} minutes")
                print(f"   - Questions: {len(test.get('questions', []))}")
        else:
            print(f"❌ Failed to get company tests: {response.status_code} - {response.text}")
    except Exception as e:
        print(f"❌ Error getting company tests: {e}")
    
    # Test 5: Get specific test details
    if test_id:
        print(f"\n5. Testing get test details for test ID: {test_id}...")
        try:
            response = requests.get(
                f"{BASE_URL}/api/candidate/company-tests/{test_id}",
                headers={"Authorization": f"Bearer {candidate_token}"}
            )
            if response.status_code == 200:
                result = response.json()
                test = result.get("test")
                print(f"✅ Test details retrieved successfully!")
                print(f"   - Company: {test.get('companyName')}")
                print(f"   - Type: {test.get('testType')}")
                print(f"   - Questions: {len(test.get('questions', []))}")
            else:
                print(f"❌ Failed to get test details: {response.status_code} - {response.text}")
        except Exception as e:
            print(f"❌ Error getting test details: {e}")
    
    print("\n" + "=" * 50)
    print("🎉 Company Tests System Test Complete!")

if __name__ == "__main__":
    test_company_tests()
