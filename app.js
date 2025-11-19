/*-------------------------------- Constants --------------------------------*/
const words = ['el libro', 'el baño', 'el hombre']

/*---------------------------- Variables (state) ----------------------------*/
let timeLeft
let usedWords

/*------------------------ Cached Element References ------------------------*/
const startButton = document.querySelector('#start')
const timer = document.querySelector('#timer')
const word = document.querySelector('#word')

/*-------------------------------- Functions --------------------------------*/
function init() {
    // reset timer back to 60 secs
    // show the game description
    // show the start button
    // hide the random word
    // hide the timer
}

function generateRandomWord() {
    // generate a random word
    // remove the last shown word from the word array and put it in the used words array
}

function start() {
    // start the timer - 60 seconds
    // show a random word from the words array
    // hide the start button
    // hide the game description
}

function setTimer() {
    // use setinterval for a timer
    // decrease the timeLeft variable by 1
    // if timeLeft === 0 stop the timer
}

function clearTimer() {
    // clear the interval timer
}

/*----------------------------- Event Listeners -----------------------------*/
startButton.addEventListener('click', start)
