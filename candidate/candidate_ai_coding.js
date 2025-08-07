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

// Form handling
const codingQuestionForm = document.getElementById('codingQuestionForm');
if (codingQuestionForm) {
    codingQuestionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const question = document.getElementById('codingQuestion').value.toLowerCase();
        let answer = 'Sorry, I don\'t have an answer for that yet.';

        if (question.includes('javascript')) {
            answer = 'To learn JavaScript, start with variables, functions, and DOM manipulation. Try this example: `const greet = () => console.log("Hello!");`';
        } else if (question.includes('react')) {
            answer = 'React is a JavaScript library for building UIs. Start with components and hooks. Example: `function App() { return <h1>Hello React</h1>; }`';
        }

        const codingAnswer = document.getElementById('codingAnswer');
        const answerText = document.getElementById('answerText');
        
        if (codingAnswer && answerText) {
            codingAnswer.style.display = 'block';
            answerText.textContent = answer;
        }
    });
}