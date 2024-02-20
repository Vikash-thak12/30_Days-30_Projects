const questions = [
    {
        question: "What is the national animal of India?",
        answers: [
                {text: "Tiger", correct: true},
                {text: "Cow", correct: false},
                {text: "lion", correct: false},
                {text: "Elephant", correct: false}
        ]
    }
];


const questionElement = document.querySelector(".questions");
const ansButton = document.querySelectorr(".answer-buttons");
const nextBtn = document.querySelector("#next-btn");

let currentQuestionIndex = 0; 
let score = 0; 

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0; 
    nextBtn.innerHTML = "Click to the next Question:"
    showQuestion();

}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions
}