let userScore = 0
let compScore = 0

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')

const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

const genCompChoice = function(){
    const options = ["rock", "paper", "scissors"]
    const randIndex = Math.floor(Math.random() * 3)
    return options[randIndex]
}

const drawGame = function(){
    // console.log("Game was draw");
    msg.innerText = "Game was draw"
    msg.style.backgroundColor = 'black'
}

const showWinner = function(userWin, userChoice, compChoice) {
    if(userWin) {
        // console.log("You win");
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = 'green'
    } else {
        // console.log("You Lose");
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = 'red'
    }
}

const playGame = function(userChoice) {
    console.log("user choice ", userChoice);

    // Generate Computer choice - modular way
    const compChoice = genCompChoice()
    console.log("comp choice ", compChoice);

    if(userChoice === compChoice) {
        // Draw game
        drawGame()
    } else {
        let userWin = true
        if(userChoice === 'rock') {
            // Scissors, paper
            userWin = compChoice === 'paper' ? false : true;
        } else if(userChoice === 'paper') {
            // Rock, Scissors
            userWin = compChoice === 'scissors' ? false : true
        } else {
            // Rock, paper
            userWin = compChoice === 'rock' ? false : true
        }

        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach(function(choice){
    // console.log(choice);
    choice.addEventListener('click', function(){
        const userChoice = choice.getAttribute('id')
        // console.log("choice was clicked", userChoice);
        playGame(userChoice)
    })
})