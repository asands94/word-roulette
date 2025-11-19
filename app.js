/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let wordsList
let timeLeft
let usedWords
let countdown
let randomWord

/*------------------------ Cached Element References ------------------------*/
const startButton = document.querySelector('#start')
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
    // push the word into the used words array
    usedWords.push(randomWord)
    // find the index of the random word
    const indexOfWord = wordsList.indexOf(randomWord)
    // remove the random word from the word list array
    wordsList.splice(indexOfWord, 1)
    // generate a random word
    // remove the last shown word from the word array and put it in the used words array
}

function start() {
    setTimer()
    generateRandomWord()
    // start the timer - 60 seconds
    // show a random word from the words array
    // hide the start button
    // hide the game description
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
