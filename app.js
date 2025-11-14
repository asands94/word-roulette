// user presses start to begin the game
// a random word from an array of words is shown
// a timer for 30 seconds starts
// when the timer ends the user can play again to go to a new rounds or end the game
// when the user ends the game, they see all the words they went through

/*-------------------------------- Constants --------------------------------*/
const wordList = ['el libro', 'el gato', 'el perro']

/*---------------------------- Variables (state) ----------------------------*/
let randomWord
let usedWords
let gameOver
let gameStarted
let time
let countdown

/*------------------------ Cached Element References ------------------------*/
const word = document.querySelector('#word')
const startButton = document.querySelector('#start')
const timer = document.querySelector('#timer')

/*-------------------------------- Functions --------------------------------*/
function init() {
    usedWords = []
    gameOver = false
    gameStarted = false
    time = 5
    render()
}
init()

function render() {
    generateRandomWord()
}

function generateRandomWord() {
    if (gameStarted === true) {
        const randomNum = Math.floor(Math.random() * wordList.length)
        randomWord = wordList[randomNum]
        word.innerText = randomWord
    }
}

function startTimer() {
    timer.innerText = `time remaining: ${time} seconds`
    countdown ??= setInterval(() => {
        time -= 1
        timer.innerText = `time remaining: ${time} seconds`
        endTimer()
    }, 1000)
}

function endTimer() {
    if (time <= 0) {
        clearInterval(countdown)
        countdown = null
    }
}

function handleClick() {
    gameStarted = true
    if (wordList.length === 0) return

    startTimer()
    render()
    usedWords.push(randomWord)
    wordList.splice(wordList.indexOf(randomWord), 1)
}

/*----------------------------- Event Listeners -----------------------------*/
startButton.addEventListener('click', handleClick)
