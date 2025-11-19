/*-------------------------------- Constants --------------------------------*/
const words = ['el libro', 'el baño', 'el hombre']

/*---------------------------- Variables (state) ----------------------------*/
let timeLeft
let usedWords
let countdown

/*------------------------ Cached Element References ------------------------*/
const startButton = document.querySelector('#start')
const timer = document.querySelector('#timer')
const word = document.querySelector('#word')

/*-------------------------------- Functions --------------------------------*/
function init() {
    timeLeft = 5
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
    setTimer()
    // start the timer - 60 seconds
    // show a random word from the words array
    // hide the start button
    // hide the game description
}

function setTimer() {
    countdown ??= setInterval(() => {
        if (timeLeft === 0) return
        timeLeft -= 1
        console.log(timeLeft)
    }, 1000)
}

function clearTimer() {
    // clear the interval timer
}
init()
/*----------------------------- Event Listeners -----------------------------*/
startButton.addEventListener('click', start)
