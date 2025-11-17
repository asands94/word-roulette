/*-------------------------------- Constants --------------------------------*/
const wordList = ['el libro', 'el gato', 'el perro']

/*---------------------------- Variables (state) ----------------------------*/
let randomWord
let usedWords
let gameOver
let time
let countdown

/*------------------------ Cached Element References ------------------------*/
const word = document.querySelector('#word')
const startButton = document.querySelector('#start')
const endButton = document.querySelector('#end')
const nextButton = document.querySelector('#next')
const timer = document.querySelector('#timer')
const usedWordsList = document.querySelector('#used-words')

/*-------------------------------- Functions --------------------------------*/
function init() {
    usedWords = []
    gameOver = false
    time = 5
    endButton.style.display = 'none'
    nextButton.style.display = 'none'
    startButton.style.display = 'inline-block'
    usedWordsList.style.display = 'none'
    timer.innerText = 'Click start to begin timer'
    console.log(wordList)
    render()
}
init()

function render() {
    generateRandomWord()
}

function generateRandomWord() {
    if (gameOver === false) {
        const randomNum = Math.floor(Math.random() * wordList.length)
        randomWord = wordList[randomNum]
        word.innerText = randomWord
    }
}

function startTimer() {
    if (wordList.length === 0) return
    if (time <= 0) {
        time = 5
    }
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
        // endButton.style.display = 'inline-block'
        // nextButton.style.display = 'inline-block'
    }
}

function handleClickNext() {
    generateRandomWord()
    startTimer()
    removeWordFromList()
}

function removeWordFromList() {
    usedWords.push(randomWord)
    wordList.splice(wordList.indexOf(randomWord), 1)
    if (wordList.length === 0) gameOver = true
}

function handleClickStart() {
    if (startButton.innerText === 'Play Again') {
        init()
    }
    startButton.style.display = 'none'
    endButton.style.display = 'inline-block'
    nextButton.style.display = 'inline-block'
    if (wordList.length === 0) return

    startTimer()
    render()
    removeWordFromList()
}

function handleClickEnd() {
    usedWordsList.innerText = `all the words shown: ${usedWords}`
    usedWordsList.style.display = 'block'
    startButton.innerText = 'Play Again'
    startButton.style.display = 'inline-block'
    endButton.style.display = 'none'
    clearInterval(countdown)
    countdown = null
    if (wordList.length === 0) return
}

/*----------------------------- Event Listeners -----------------------------*/
startButton.addEventListener('click', handleClickStart)
endButton.addEventListener('click', handleClickEnd)
nextButton.addEventListener('click', handleClickNext)
