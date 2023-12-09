const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },

    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text: "Kalhari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antartica", correct: true},
        ]
    },

    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },

    {
        question: "Which is the smallest country in the world?",
        answers: [
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Sri Lanka", correct: false},
        ]
    }
]

const questionElement = document.getElementById('question')
const answerButton = document.getElementById('answer-buttons')
const nextBtn = document.getElementById('next-btn')

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextBtn.innerHTML = 'Next'
    showQuestion()
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question

    currentQuestion.answers.forEach(function(answer) {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerButton.appendChild(button)
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
}


function resetState() {
    nextBtn.style.display = 'none'
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}


function selectAnswer(e) {
    let selectBtn = e.target
    const isCorrect = selectBtn.dataset.correct === "true"
    if(isCorrect) {
        selectBtn.classList.add('correct')
        score++
    } else {
        selectBtn.classList.add('incorrect')
    }

    Array.from(answerButton.children).forEach(function(button) {
        if(button.dataset.correct === "true") {
            button.classList.add('correct')
        }
        button.disabled = true
    })
    
    nextBtn.style.display = 'block'
}

function showScore() {
    resetState()
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`
    nextBtn.innerHTML = "Play Again"
    nextBtn.style.display = 'block'
}

function handleNextButton() {
    currentQuestionIndex++ 
    if(currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore()
    }
}

nextBtn.addEventListener('click', function() {
    if(currentQuestionIndex < questions.length) {
        handleNextButton()
    } else {
        startQuiz()
    }
})


startQuiz()