// Complete Question Bank - Much larger pool for randomization
const allQuestions = {
    aptitude: [
        // Quantitative Questions (20+)
        {
            type: 'mcq',
            category: 'Quantitative',
            question: 'If a train travels 240 km in 3 hours, what is its average speed?',
            options: ['60 km/h', '70 km/h', '80 km/h', '90 km/h'],
            correct: 2
        },
        {
            type: 'mcq',
            category: 'Quantitative',
            question: 'What is 25% of 80?',
            options: ['15', '20', '25', '30'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Quantitative',
            question: 'If x + 5 = 12, what is x?',
            options: ['5', '6', '7', '8'],
            correct: 2
        },
        {
            type: 'mcq',
            category: 'Quantitative',
            question: 'The area of a rectangle with length 8m and width 5m is:',
            options: ['26 sq m', '30 sq m', '35 sq m', '40 sq m'],
            correct: 3
        },
        {
            type: 'mcq',
            category: 'Quantitative',
            question: 'What is the compound interest on ₹1000 for 2 years at 10% per annum?',
            options: ['₹200', '₹210', '₹220', '₹250'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Quantitative',
            question: 'If the ratio of boys to girls is 3:2 and there are 15 boys, how many girls are there?',
            options: ['8', '10', '12', '15'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Quantitative',
            question: 'What is 15% of 200?',
            options: ['25', '30', '35', '40'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Quantitative',
            question: 'If a shirt costs ₹400 after a 20% discount, what was the original price?',
            options: ['₹480', '₹500', '₹520', '₹600'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Quantitative',
            question: 'The average of 5 numbers is 20. If one number is 25, what is the sum of the other 4?',
            options: ['65', '70', '75', '80'],
            correct: 2
        },
        {
            type: 'mcq',
            category: 'Quantitative',
            question: 'What is the next number in the sequence: 1, 4, 9, 16, ?',
            options: ['20', '24', '25', '30'],
            correct: 2
        },
        // Logical Questions (20+)
        {
            type: 'mcq',
            category: 'Logical',
            question: 'Complete the series: 2, 6, 12, 20, 30, ?',
            options: ['40', '42', '44', '46'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Logical',
            question: 'If all roses are flowers and some flowers are red, then:',
            options: ['All roses are red', 'Some roses are red', 'No roses are red', 'Cannot be determined'],
            correct: 3
        },
        {
            type: 'mcq',
            category: 'Logical',
            question: 'What comes next: A, C, F, J, O, ?',
            options: ['S', 'T', 'U', 'V'],
            correct: 2
        },
        {
            type: 'mcq',
            category: 'Logical',
            question: 'If BOOK is coded as 2115151011, what is CODE?',
            options: ['31514', '3151405', '315405', '31545'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Logical',
            question: 'Find the odd one out: Dog, Cat, Lion, Car',
            options: ['Dog', 'Cat', 'Lion', 'Car'],
            correct: 3
        },
        {
            type: 'mcq',
            category: 'Logical',
            question: 'If Monday is coded as 123456, what is Friday?',
            options: ['789456', '785456', '789654', '785654'],
            correct: 0
        },
        {
            type: 'mcq',
            category: 'Logical',
            question: 'Complete: 5, 10, 20, 40, ?',
            options: ['60', '70', '80', '90'],
            correct: 2
        },
        {
            type: 'mcq',
            category: 'Logical',
            question: 'If North is South and East is West, which direction is Northeast?',
            options: ['Southwest', 'Southeast', 'Northwest', 'Northeast'],
            correct: 0
        },
        {
            type: 'mcq',
            category: 'Logical',
            question: 'What is the missing number: 2, 6, 18, 54, ?',
            options: ['108', '162', '216', '324'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Logical',
            question: 'If A=1, B=2, C=3, what is the value of "CAB"?',
            options: ['6', '12', '312', '123'],
            correct: 0
        },
        // Verbal Questions (20+)
        {
            type: 'mcq',
            category: 'Verbal',
            question: 'Choose the synonym of "Abundant":',
            options: ['Scarce', 'Plentiful', 'Limited', 'Restricted'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Verbal',
            question: 'Choose the antonym of "Optimistic":',
            options: ['Hopeful', 'Positive', 'Pessimistic', 'Confident'],
            correct: 2
        },
        {
            type: 'mcq',
            category: 'Verbal',
            question: 'Choose the correct spelling:',
            options: ['Accomodate', 'Accommodate', 'Acommodate', 'Acomodate'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Verbal',
            question: 'Complete: "A stitch in time saves ____"',
            options: ['eight', 'nine', 'ten', 'seven'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Verbal',
            question: 'What is the meaning of "Ubiquitous"?',
            options: ['Rare', 'Present everywhere', 'Ancient', 'Modern'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Verbal',
            question: 'Choose the antonym of "Verbose":',
            options: ['Talkative', 'Concise', 'Lengthy', 'Detailed'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Verbal',
            question: 'What does "Procrastinate" mean?',
            options: ['To hurry', 'To delay', 'To complete', 'To cancel'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Verbal',
            question: 'Choose the synonym of "Diligent":',
            options: ['Lazy', 'Hardworking', 'Careless', 'Slow'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Verbal',
            question: 'Complete the idiom: "Don\'t count your chickens before they ____"',
            options: ['fly', 'hatch', 'grow', 'sing'],
            correct: 1
        },
        {
            type: 'mcq',
            category: 'Verbal',
            question: 'What is the plural of "Analysis"?',
            options: ['Analysises', 'Analysis', 'Analyses', 'Analysi'],
            correct: 2
        }
    ],
    coding: [
        {
            type: 'coding',
            category: 'Programming',
            question: 'Write a function that returns the factorial of a given number n.',
            templates: {
                python: '# Calculate factorial of n\ndef factorial(n):\n    # Your code here\n    pass',
                java: '// Calculate factorial of n\npublic class Solution {\n    public static int factorial(int n) {\n        // Your code here\n        return 0;\n    }\n}',
                javascript: '// Calculate factorial of n\nfunction factorial(n) {\n    // Your code here\n}'
            }
        },
        {
            type: 'coding',
            category: 'Programming',
            question: 'Write a function to check if a given string is a palindrome (reads the same forwards and backwards).',
            templates: {
                python: '# Check if string is palindrome\ndef is_palindrome(s):\n    # Your code here\n    pass',
                java: '// Check if string is palindrome\npublic class Solution {\n    public static boolean isPalindrome(String s) {\n        // Your code here\n        return false;\n    }\n}',
                javascript: '// Check if string is palindrome\nfunction isPalindrome(s) {\n    // Your code here\n}'
            }
        },
        {
            type: 'coding',
            category: 'Programming',
            question: 'Write a function that finds the maximum number in an array.',
            templates: {
                python: '# Find maximum in array\ndef find_max(arr):\n    # Your code here\n    pass',
                java: '// Find maximum in array\npublic class Solution {\n    public static int findMax(int[] arr) {\n        // Your code here\n        return 0;\n    }\n}',
                javascript: '// Find maximum in array\nfunction findMax(arr) {\n    // Your code here\n}'
            }
        },
        {
            type: 'coding',
            category: 'Programming',
            question: 'Write a function to find the sum of all even numbers in an array.',
            templates: {
                python: '# Sum of even numbers\ndef sum_even(arr):\n    # Your code here\n    pass',
                java: '// Sum of even numbers\npublic class Solution {\n    public static int sumEven(int[] arr) {\n        // Your code here\n        return 0;\n    }\n}',
                javascript: '// Sum of even numbers\nfunction sumEven(arr) {\n    // Your code here\n}'
            }
        },
        {
            type: 'coding',
            category: 'Programming',
            question: 'Write a function to reverse a string.',
            templates: {
                python: '# Reverse a string\ndef reverse_string(s):\n    # Your code here\n    pass',
                java: '// Reverse a string\npublic class Solution {\n    public static String reverseString(String s) {\n        // Your code here\n        return "";\n    }\n}',
                javascript: '// Reverse a string\nfunction reverseString(s) {\n    // Your code here\n}'
            }
        },
        {
            type: 'coding',
            category: 'Programming',
            question: 'Write a function to count vowels in a string.',
            templates: {
                python: '# Count vowels in string\ndef count_vowels(s):\n    # Your code here\n    pass',
                java: '// Count vowels in string\npublic class Solution {\n    public static int countVowels(String s) {\n        // Your code here\n        return 0;\n    }\n}',
                javascript: '// Count vowels in string\nfunction countVowels(s) {\n    // Your code here\n}'
            }
        },
        {
            type: 'coding',
            category: 'Programming',
            question: 'Write a function to check if a number is prime.',
            templates: {
                python: '# Check if number is prime\ndef is_prime(n):\n    # Your code here\n    pass',
                java: '// Check if number is prime\npublic class Solution {\n    public static boolean isPrime(int n) {\n        // Your code here\n        return false;\n    }\n}',
                javascript: '// Check if number is prime\nfunction isPrime(n) {\n    // Your code here\n}'
            }
        },
        {
            type: 'coding',
            category: 'Programming',
            question: 'Write a function to find the second largest number in an array.',
            templates: {
                python: '# Find second largest\ndef second_largest(arr):\n    # Your code here\n    pass',
                java: '// Find second largest\npublic class Solution {\n    public static int secondLargest(int[] arr) {\n        // Your code here\n        return 0;\n    }\n}',
                javascript: '// Find second largest\nfunction secondLargest(arr) {\n    // Your code here\n}'
            }
        }
    ]
};

// Global Variables
let currentQuestion = 0;
let answers = {};
let timeLeft = 45 * 60; // 45 minutes in seconds
let timerInterval;
let examStartTime;
let currentLanguage = 'python';
let examSubmitted = false;
let questions = [];

// Randomization Functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function selectRandomQuestions() {
    // Shuffle all question pools
    const shuffledAptitude = shuffleArray(allQuestions.aptitude);
    const shuffledCoding = shuffleArray(allQuestions.coding);
    
    // Select 12 random aptitude questions
    const selectedAptitude = shuffledAptitude.slice(0, 12);
    
    // Select 3 random coding questions
    const selectedCoding = shuffledCoding.slice(0, 3);
    
    // Combine and create final question set
    questions = [...selectedAptitude, ...selectedCoding];
    
    // Shuffle options for MCQ questions to make them more random
    questions.forEach(question => {
        if (question.type === 'mcq') {
            shuffleMCQOptions(question);
        }
    });
    
    console.log('🎲 Random questions selected:', {
        aptitude: selectedAptitude.length,
        coding: selectedCoding.length,
        total: questions.length
    });
}

function shuffleMCQOptions(question) {
    const correctAnswer = question.options[question.correct];
    const shuffledOptions = shuffleArray(question.options);
    
    // Update the correct answer index after shuffling
    question.correct = shuffledOptions.indexOf(correctAnswer);
    question.options = shuffledOptions;
}

// Enhanced Start Exam Function
function startExam() {
    // First, select random questions
    selectRandomQuestions();
    
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('examContainer').style.display = 'block';
    
    examStartTime = Date.now();
    startTimer();
    loadQuestion();
    
    // Show randomization notification
    setTimeout(() => {
        showNotification('🎲 Questions randomized! Good luck!', 'success');
    }, 500);
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'warning' ? '#ffc107' : '#007bff'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.5s ease, fadeOut 0.5s ease 2.5s forwards;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;

    document.body.appendChild(notification);

    // Add animation styles if not already present
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove notification after animation
    setTimeout(() => {
                    notification.remove();
    }, 3000);
}

// Timer Functions
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 300 && timeLeft > 60) { // 5 minutes warning
            document.getElementById('timer').classList.add('warning');
        }
        if (timeLeft <= 60) { // 1 minute danger
            document.getElementById('timer').classList.remove('warning');
            document.getElementById('timer').classList.add('danger');
        }
        if (timeLeft <= 0) {
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Question Loading
function loadQuestion() {
    const question = questions[currentQuestion];
    
    // Update header
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('questionType').textContent = `${question.type === 'mcq' ? 'Aptitude' : 'Coding'} - ${question.category}`;
    document.getElementById('questionText').textContent = question.question;
    
    // Update progress
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    
    // Show appropriate container
    if (question.type === 'mcq') {
        document.getElementById('mcqOptions').style.display = 'grid';
        document.getElementById('codingContainer').style.display = 'none';
        loadMCQOptions(question);
    } else {
        document.getElementById('mcqOptions').style.display = 'none';
        document.getElementById('codingContainer').style.display = 'block';
        loadCodingQuestion(question);
    }
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    
    if (currentQuestion === questions.length - 1) {
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'block';
    } else {
        document.getElementById('nextBtn').style.display = 'block';
        document.getElementById('submitBtn').style.display = 'none';
    }
}

// MCQ Functions
function loadMCQOptions(question) {
    const container = document.getElementById('mcqOptions');
    container.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectOption(index);
        
        // Check if this option was previously selected
        if (answers[currentQuestion] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
        `;
        
        container.appendChild(optionDiv);
    });
}

function selectOption(index) {
    // Remove previous selection
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Select current option
    options[index].classList.add('selected');
    answers[currentQuestion] = index;
}

// Coding Functions
function loadCodingQuestion(question) {
    const editor = document.getElementById('codeEditor');
    
    // Load saved code or template
    if (answers[currentQuestion]) {
        editor.value = answers[currentQuestion][currentLanguage] || question.templates[currentLanguage];
    } else {
        editor.value = question.templates[currentLanguage];
        // Initialize answer object for coding question
        answers[currentQuestion] = {};
    }
    
    // Update language tabs
    updateLanguageTabs();
}

function updateLanguageTabs() {
    const tabs = document.querySelectorAll('.lang-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.lang === currentLanguage) {
            tab.classList.add('active');
        }
    });
}

// Language switching
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('languageTabs').addEventListener('click', function(e) {
        if (e.target.classList.contains('lang-tab')) {
            // Save current code
            if (questions[currentQuestion] && questions[currentQuestion].type === 'coding') {
                const editor = document.getElementById('codeEditor');
                if (!answers[currentQuestion]) {
                    answers[currentQuestion] = {};
                }
                answers[currentQuestion][currentLanguage] = editor.value;
            }
            
            // Switch language
            currentLanguage = e.target.dataset.lang;
            
            // Load new template/saved code
            if (questions[currentQuestion] && questions[currentQuestion].type === 'coding') {
                loadCodingQuestion(questions[currentQuestion]);
            }
        }
    });
});

// Code editor auto-save
document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('codeEditor');
    editor.addEventListener('input', function() {
        if (questions[currentQuestion] && questions[currentQuestion].type === 'coding') {
            if (!answers[currentQuestion]) {
                answers[currentQuestion] = {};
            }
            answers[currentQuestion][currentLanguage] = editor.value;
        }
    });
});

// Navigation Functions
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        // Save current coding answer if applicable
        if (questions[currentQuestion].type === 'coding') {
            const editor = document.getElementById('codeEditor');
            if (!answers[currentQuestion]) {
                answers[currentQuestion] = {};
            }
            answers[currentQuestion][currentLanguage] = editor.value;
        }
        
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        // Save current coding answer if applicable
        if (questions[currentQuestion].type === 'coding') {
            const editor = document.getElementById('codeEditor');
            if (!answers[currentQuestion]) {
                answers[currentQuestion] = {};
            }
            answers[currentQuestion][currentLanguage] = editor.value;
        }
        
        currentQuestion--;
        loadQuestion();
    }
}

// Submit Exam
function submitExam() {
    if (examSubmitted) return;
    
    examSubmitted = true;
    clearInterval(timerInterval);
    
    // Save final coding answer if applicable
    if (questions[currentQuestion] && questions[currentQuestion].type === 'coding') {
        const editor = document.getElementById('codeEditor');
        if (!answers[currentQuestion]) {
            answers[currentQuestion] = {};
        }
        answers[currentQuestion][currentLanguage] = editor.value;
    }
    
    // Calculate results
    calculateResults();
    
    // Show results
    showResults();
}

// Results Calculation
function calculateResults() {
    let aptitudeCorrect = 0;
    let codingAnswered = 0;
    let totalAptitude = 12;
    let totalCoding = 3;
    
    // Check aptitude answers
    for (let i = 0; i < totalAptitude; i++) {
        if (answers[i] === questions[i].correct) {
            aptitudeCorrect++;
        }
    }
    
    // Check coding answers (simple check - if code is modified from template)
    for (let i = totalAptitude; i < questions.length; i++) {
        if (answers[i]) {
            let hasCode = false;
            for (let lang in answers[i]) {
                const code = answers[i][lang] || '';
                const template = questions[i].templates[lang] || '';
                if (code !== template && code.trim().length > template.trim().length) {
                    hasCode = true;
                    break;
                }
            }
            if (hasCode) codingAnswered++;
        }
    }
    
    // Calculate time taken
    const timeSpent = Math.floor((Date.now() - examStartTime) / 1000);
    const timeSpentMinutes = Math.floor(timeSpent / 60);
    
    // Calculate overall score (assuming coding questions are worth more)
    const aptitudeScore = (aptitudeCorrect / totalAptitude) * 60; // 60% weight for aptitude
    const codingScore = (codingAnswered / totalCoding) * 40; // 40% weight for coding
    const totalScore = Math.round(aptitudeScore + codingScore);
    
    // Store results
    window.examResults = {
        aptitudeCorrect,
        totalAptitude,
        codingAnswered,
        totalCoding,
        totalScore,
        timeSpentMinutes,
        accuracy: Math.round(((aptitudeCorrect + codingAnswered) / (totalAptitude + totalCoding)) * 100)
    };
}

// Show Results
function showResults() {
    document.getElementById('examContainer').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'block';
    
    const results = window.examResults;
    
    // Update score circle
    const scoreCircle = document.querySelector('.score-circle');
    const percentage = results.totalScore;
    const angle = (percentage / 100) * 360;
    scoreCircle.style.background = `conic-gradient(#4ecdc4 0deg, #44a08d ${angle}deg, #e9ecef ${angle}deg)`;
    
    // Update result values
    document.getElementById('totalScore').textContent = `${results.totalScore}%`;
    document.getElementById('aptitudeScore').textContent = `${results.aptitudeCorrect}/${results.totalAptitude}`;
    document.getElementById('codingScore').textContent = `${results.codingAnswered}/${results.totalCoding}`;
    document.getElementById('totalTime').textContent = `${results.timeSpentMinutes} min`;
    document.getElementById('accuracy').textContent = `${results.accuracy}%`;
}

// Enhanced Restart Exam with New Questions
function restartExam() {
    // Reset all variables
    currentQuestion = 0;
    answers = {};
    timeLeft = 45 * 60;
    currentLanguage = 'python';
    examSubmitted = false;
    questions = []; // Clear previous questions
    
    // Reset timer display
    document.getElementById('timer').className = 'timer';
    updateTimerDisplay();
    
    // Show welcome screen
    document.getElementById('resultsScreen').style.display = 'none';
    document.getElementById('examContainer').style.display = 'none';
    document.getElementById('welcomeScreen').style.display = 'block';
    
    // Show restart notification
    showNotification('🔄 Ready for a new randomized test!', 'info');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add some initial animations
    setTimeout(() => {
        document.querySelector('.welcome-screen').style.opacity = '1';
    }, 100);
});

// Prevent page refresh during exam
window.addEventListener('beforeunload', function(e) {
    if (document.getElementById('examContainer').style.display === 'block' && !examSubmitted) {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? Your progress will be lost.';
        return e.returnValue;
    }
});

// Auto-save functionality for coding questions
setInterval(() => {
    if (questions[currentQuestion] && questions[currentQuestion].type === 'coding') {
        const editor = document.getElementById('codeEditor');
        if (editor && editor.value) {
            if (!answers[currentQuestion]) {
                answers[currentQuestion] = {};
            }
            answers[currentQuestion][currentLanguage] = editor.value;
        }
    }
}, 5000); // Auto-save every 5 seconds

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (document.getElementById('examContainer').style.display === 'block') {
        // Previous question: Alt + Left Arrow
        if (e.altKey && e.key === 'ArrowLeft' && currentQuestion > 0) {
            e.preventDefault();
            prevQuestion();
        }
        // Next question: Alt + Right Arrow
        if (e.altKey && e.key === 'ArrowRight' && currentQuestion < questions.length - 1) {
            e.preventDefault();
            nextQuestion();
        }
        // Submit: Ctrl + Enter
        if (e.ctrlKey && e.key === 'Enter' && currentQuestion === questions.length - 1) {
            e.preventDefault();
            submitExam();
        }
    }
});

// Add smooth scrolling for better UX
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Call smooth scroll when changing questions
const originalNextQuestion = nextQuestion;
const originalPrevQuestion = prevQuestion;

nextQuestion = function() {
    originalNextQuestion();
    smoothScrollToTop();
};

prevQuestion = function() {
    originalPrevQuestion();
    smoothScrollToTop();
};