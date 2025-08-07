// DOM elements
const backButton = document.getElementById('back');

// Error handling for back button
if (backButton) {
    backButton.addEventListener('click', () => {
        try {
            window.location.href = 'candidate_dashboard.html';
        } catch (error) {
            console.error('Navigation error:', error);
            // Fallback navigation
            window.location.replace('candidate_dashboard.html');
        }
    });
} else {
    console.error('Back button not found');
}

// Fallback JWT decoder function
function decodeJWT(token) {
    try {
        // Simple JWT decoder (for basic tokens)
        const parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('Invalid JWT format');
        }
        
        // Decode the payload (second part)
        const payload = parts[1];
        // Add padding if needed
        const paddedPayload = payload + '='.repeat((4 - payload.length % 4) % 4);
        const decodedPayload = atob(paddedPayload.replace(/-/g, '+').replace(/_/g, '/'));
        
        return JSON.parse(decodedPayload);
    } catch (error) {
        console.error('Error in fallback JWT decoder:', error);
        throw error;
    }
}

// Get token and username
const token = localStorage.getItem('token');
let username = '';

// Initialize authentication
try {
    if (token) {
        // Try to use the external library first
        if (typeof jwtDecode !== 'undefined') {
            username = jwtDecode(token).username;
        } else if (typeof jwt_decode !== 'undefined') {
            // Fallback for older versions
            username = jwt_decode(token).username;
        } else {
            // Fallback to manual decoder
            console.log('Using fallback JWT decoder');
            username = decodeJWT(token).username;
        }
    }
} catch (error) {
    console.error('Authentication error:', error);
    showNotification('Authentication error. Please log in again.', 'error');
}

// Form handling
const codingForm = document.getElementById('codingForm');
if (codingForm) {
    codingForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const problem = document.getElementById('problem').value;
        const code = document.getElementById('code').value;

        try {
            const response = await fetch('http://localhost:8000/api/coding-practice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ user: username, problem, code, output: 'Simulated output' }),
            });
            
            const codingResult = document.getElementById('codingResult');
            if (response.ok && codingResult) {
                codingResult.style.display = 'block';
            } else {
                alert('Failed to submit code');
            }
        } catch (error) {
            console.error('Error submitting code:', error);
            alert('Failed to submit code');
        }
    });
}