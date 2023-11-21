
const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffes", correct: false },
        ],
    },
    {
        question: "Which country is the smallest country in the world?",
        answers: [
            { text: "Iceland", correct: false },
            { text: "Tajikistan", correct: false },
            { text: "Spain", correct: false },
            { text: "Vatican City", correct: true },
        ],
    },
    {
        question: "Which country is the most populated country in the world?",
        answers: [
            { text: "China", correct: false },
            { text: "America", correct: false },
            { text: "Pakistan", correct: false },
            { text: "India", correct: true },
        ],
    },
    {
        question: "Who were the allied powers durring ww2?",
        answers: [
            { text: "England", correct: false },
            { text: "America", correct: false },
            { text: "France", correct: false },
            { text: "Soviet union", correct: false },
            { text: "All of these", correct: true },
        ],
    },
    {
        question: "Which continent is the smallest in the world?",
        answers: [
            { text: "Oceania", correct: true },
            { text: "Europe", correct: false },
            { text: "Asia", correct: false },
            { text: "North America", correct: false },
        ],
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "F. Scott Fitzgerald", correct: false },
        ],
    },
    
    {
        question: "Which country is the largest producer of oil?",
        answers: [
            { text: "Saudia Arab", correct: false },
            { text: "Iran", correct: false },
            { text: "venezuela", correct: true },
            { text: "Qatar", correct: false },
        ],
    },
];

const questionElement = document.querySelector("#question");
const answerButton = document.querySelector(".answer-buttons");
const nextButton = document.querySelector(".next-button");

    let currentQuestionIndex = 0;
    let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("Incorrect");
    }
    Array.from(answerButton.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

  


startQuiz();