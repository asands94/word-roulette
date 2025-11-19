/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let wordsList
let timeLeft
let usedWords
let countdown
let randomWord

/*------------------------ Cached Element References ------------------------*/
const startButton = document.querySelector('#start')
const newWord = document.querySelector('#start')
const description = document.querySelector('#description')
const timer = document.querySelector('#timer')
const word = document.querySelector('#word')

/*-------------------------------- Functions --------------------------------*/
function init() {
    timeLeft = 5
    wordsList = ['el libro', 'el baño', 'el hombre']
    usedWords = []
    startButton.innerText = 'START'
    description.classList.remove('hidden')
    word.classList.add('hidden')
    timer.classList.add('hidden')
}

function generateRandomWord() {
    if (wordsList.length === 0) return
    // generate the random word
    randomWord = wordsList[Math.floor(Math.random() * wordsList.length)]
    // show the word in the browser
    word.innerText = randomWord
    word.classList.remove('hidden')
    // push the word into the used words array
    usedWords.push(randomWord)
    // find the index of the random word
    const indexOfWord = wordsList.indexOf(randomWord)
    // remove the random word from the word list array
    wordsList.splice(indexOfWord, 1)
}

function start() {
    setTimer()
    generateRandomWord()
    startButton.classList.add('hidden')
    description.classList.add('hidden')
}

function setTimer() {
    timer.classList.remove('hidden')
    timer.innerText = `${timeLeft} seconds left`
    countdown ??= setInterval(() => {
        timeLeft -= 1
        timer.innerText = `${timeLeft} seconds left`
        if (timeLeft === 0) {
            timer.innerText = `Time's Up`
            clearInterval(countdown)
            startButton.innerText = 'New Word'
            startButton.classList.remove('hidden')
        }
    }, 1000)
}

init()
/*----------------------------- Event Listeners -----------------------------*/
startButton.addEventListener('click', () => {
    if (startButton.innerText === 'START') {
        start()
    } else {
        init()
    }
})
