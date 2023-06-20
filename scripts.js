const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion()
})
//###############################################






function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)

    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    //nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


 const questions = [
    {
        question: 'The Nigeria Police Force is an agency of .......... organ of government.',
        answers: [
            {text: 'Executive', correct: true },
            {text: 'Judiciary', correct: false },
            {text: 'Lagislature', correct: false },
            {text: 'All of the above', correct: false }
        ]
    },
    {
        question: 'Who was the first indigenous Inspector General of Police?',
        answers: [
            {text: 'Adams Smith', correct: false },
            {text: 'Solomon Arase', correct: false },
            {text: 'Louis Edet', correct: true },
            {text: 'Tafa Balogun', correct: false }
        ]
    },
    {
        question: 'One of these involves the ability to distinguish right from wrong and to behave accordingly.',
        answers: [
            {text: 'Immorality', correct: false },
            {text: 'Fanatism', correct: false },
            {text: 'Morality', correct: true },
            {text: 'Satanism', correct: false }
        ]
    },
    {
        question: 'Two positive integers differ by 7. The sum of their squares is 169. Find the larger integer.',
        answers: [
            {text: '4', correct: false },
            {text: '5', correct: false },
            {text: '9', correct: false },
            {text: '12', correct: true }
        ]
    },
    {
        question: 'It is about time you ........ to bed.',
        answers: [
            {text: 'Go', correct: false },
            {text: 'Have gone', correct: false },
            {text: 'Went', correct: true },
            {text: 'Going', correct: false }
        ]
    }
]
