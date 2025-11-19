/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let wordsList
let timeLeft
let usedWords
let countdown
let randomWord

/*------------------------ Cached Element References ------------------------*/
const startButton = document.querySelector('#start')
const description = document.querySelector('#description')
const timer = document.querySelector('#timer')
const word = document.querySelector('#word')

/*-------------------------------- Functions --------------------------------*/
function init() {
    timeLeft = 5
    wordsList = ['el libro', 'el baño', 'el hombre']
    usedWords = []
    // reset timer back to 60 secs
    // show the game description
    // show the start button
    // hide the random word
    // hide the timer
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
    countdown ??= setInterval(() => {
        if (timeLeft === 0) return
        timeLeft -= 1
    }, 1000)
}

function clearTimer() {
    // clear the interval timer
}
init()
/*----------------------------- Event Listeners -----------------------------*/
startButton.addEventListener('click', start)
