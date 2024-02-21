const questions = [
    // Animal Questions
    {
        question: "What is the national animal of India?",
        answers: [
            { text: "Tiger", correct: true },
            { text: "Cow", correct: false },
            { text: "Lion", correct: false },
            { text: "Elephant", correct: false }
        ]
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        answers: [
            { text: "Tiger", correct: false },
            { text: "Lion", correct: true },
            { text: "Leopard", correct: false },
            { text: "Cheetah", correct: false }
        ]
    },
    {
        question: "What is the largest species of bear?",
        answers: [
            { text: "Polar Bear", correct: true },
            { text: "Grizzly Bear", correct: false },
            { text: "Black Bear", correct: false },
            { text: "Brown Bear", correct: false }
        ]
    },
    {
        question: "Which bird is known for its ability to mimic human speech?",
        answers: [
            { text: "Parrot", correct: true },
            { text: "Pigeon", correct: false },
            { text: "Crow", correct: false },
            { text: "Sparrow", correct: false }
        ]
    },
    {
        question: "What is the fastest land animal?",
        answers: [
            { text: "Cheetah", correct: true },
            { text: "Lion", correct: false },
            { text: "Leopard", correct: false },
            { text: "Gazelle", correct: false }
        ]
    },
    // Space Questions
    {
        question: "What is the closest planet to the Sun?",
        answers: [
            { text: "Mercury", correct: true },
            { text: "Venus", correct: false },
            { text: "Earth", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Mercury", correct: false },
            { text: "Venus", correct: false },
            { text: "Earth", correct: false },
            { text: "Mars", correct: true }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Uranus", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "What is the name of the first artificial satellite launched into space?",
        answers: [
            { text: "Sputnik 1", correct: true },
            { text: "Explorer 1", correct: false },
            { text: "Vanguard 1", correct: false },
            { text: "Telstar 1", correct: false }
        ]
    },
    {
        question: "Which galaxy is Earth located in?",
        answers: [
            { text: "Milky Way", correct: true },
            { text: "Andromeda", correct: false },
            { text: "Whirlpool", correct: false },
            { text: "Triangulum", correct: false }
        ]
    },
    {
        question: "Which river is known as the 'Ganges' in India?",
        answers: [
            { text: "Yamuna", correct: false },
            { text: "Brahmaputra", correct: false },
            { text: "Indus", correct: false },
            { text: "Ganga", correct: true }
        ]
    },
    {
        question: "Which city is known as the 'Pink City' of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Jaipur", correct: true },
            { text: "Delhi", correct: false },
            { text: "Kolkata", correct: false }
        ]
    },
    {
        question: "What is the capital city of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Kolkata", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Who was the first Prime Minister of India?",
        answers: [
            { text: "Mahatma Gandhi", correct: false },
            { text: "Jawaharlal Nehru", correct: true },
            { text: "Indira Gandhi", correct: false },
            { text: "Sardar Vallabhbhai Patel", correct: false }
        ]
    },
    {
        question: "Which Indian state is known as the 'Land of Five Rivers'?",
        answers: [
            { text: "Punjab", correct: true },
            { text: "Rajasthan", correct: false },
            { text: "Maharashtra", correct: false },
            { text: "Kerala", correct: false }
        ]
    }

];



const questionElement = document.querySelector(".questions");
const ansButton = document.querySelector(".answer-buttons");
const nextBtn = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Click to the next Question:";
    showQuestion();

}

function showQuestion() {
    ResetFn();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer);
    })
}

function ResetFn() {
    nextBtn.style.display = "none";
    while (ansButton.firstChild) {
        ansButton.removeChild(ansButton.firstChild);
    }
}

function selectanswer(e) {
    const selectedBtn = e.target;
    const iscorrect = correctedBtn.dataset.correct === true;
    if (iscorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.remove("incorrect");
    }
}

startQuiz();