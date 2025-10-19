let computerNumber
let userNumbers = []
let attempts = 0

function newGame() {
    window.location.reload()
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    //console.log(computerNumber)
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if (attempts < 10) {
        if (userNumber > 100) {
            document.getElementById('textOutput').innerHTML = 'Number invalid! Type a number between 0 and 100'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
        else {
            if (userNumber > computerNumber) {
                document.getElementById('textOutput').innerHTML = 'Your number is too high'
                document.getElementById('inputBox').value = ''
                attempts++
                document.getElementById('attempts').innerHTML = attempts
            }
            else if (userNumber < computerNumber) {
                document.getElementById('textOutput').innerHTML = 'Your number is too low'
                document.getElementById('inputBox').value = ''
                attempts++
                document.getElementById('attempts').innerHTML = attempts
            }
            else {
                document.getElementById('textOutput').innerHTML = 'Congratulations!!!'
                attempts++
                document.getElementById('attempts').innerHTML = attempts
                document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
            }
        } 
    }
    else {
        document.getElementById('textOutput').innerHTML = 'You lose!!! The computer number was ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
}