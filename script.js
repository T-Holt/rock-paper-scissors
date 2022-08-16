//create string variable for player
//let playerSelection = prompt('Rock, paper, or scissors?')
//const playerSelection = 'Rock';
//create string variable for computer
//const computerSelection = getComputerChoice();
//const computerSelection = 'scissors';
//randomly return 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    const arr = ['Rock', 'Paper', 'Scissors'];
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}
//store in computer variable
//ask user 'Rock, paper, or scissors?

//store user input in player variable
/*if user picks 'Rock' && computer picks 'Scissors'
            ||  'Paper' && computer picks 'Rock'
            ||  'Scissors' && computer picks 'Paper'
        output message 'You win!' + 'player variable' + ' beats ' 'computer variable' +'!'
    else output message 'You lose!' + 'computer variable' + ' beats ' 'player variable' +'!' */


//const capitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)

/* function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt('Rock, paper, or scissors?')
    const capitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    if (playerSelection.toUpperCase() != 'ROCK' &&  playerSelection.toUpperCase() != 'PAPER' && playerSelection.toUpperCase() != 'SCISSORS') {
        return 'Please choose "rock, paper, or scissors"'
    }else {
    if ((playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() == 'SCISSORS') ||
        (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'PAPER') ||
        (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'ROCK')) {
            return 'You win! ' + capitalized + ' beats ' + computerSelection.toLowerCase() + '!'
        } else if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
            return 'Tie game!'
        }
        else {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection.toLowerCase() + '!'
        }
    }
}
*/

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt('Rock, paper, or scissors?')
    const capitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    if (playerSelection.toUpperCase() != 'ROCK' &&  playerSelection.toUpperCase() != 'PAPER' && playerSelection.toUpperCase() != 'SCISSORS') {
        return 'Please choose "rock, paper, or scissors"'
    }else {
    if ((playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() == 'SCISSORS') ||
        (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'PAPER') ||
        (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'ROCK')) {
            return 'You win!'
        } else if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
            return 'Tie game!'
        }
        else {
        return 'You lose!'
        }
    }
}

//let playerScore = getPlayerScore()
//let computerScore = getComputerScore()
//let playerScore = 5
//let computerScore = 8

function game() {
    for (i=0; i<5; i++) {
        let result = playRound()
        console.log(result);
        }
    if (i === 5) {
        console.log(finalScore(playerScore, computerScore))
    }   
    }

/* function game() {
    for (i=0; i<5; i++) {
        let result = playRound()
       console.log(result);
       for (playerScore = 0; result === 'You win!' || result === 'Tie game!'; playerScore++) {
       console.log(playerScore)
       }
       for (computerScore = 0; result === 'You lose' || result === 'Tie game!'; computerScore++) {
        console.log(computerScore)
           }
        }
    if (i === 5) {
        console.log(finalScore(playerScore, computerScore))
    }   
    } */

function getPlayerScore() {
    for (playerScore = 0; playRound() === 'You win!' || playRound() === 'Tie game!'; playerScore++) {
        return playerScore
        }
    //let p = 0
    //if (playRound() === 'You win!' || playRound() === 'Tie game!') {
   // p++
    //}
}

function getComputerScore() {
    for (computerScore = 0; playRound() === 'You lose' || playRound() === 'Tie game!'; computerScore++) {
        return computerScore
        }
    //let c = 0
    //if (playRound() === 'You lose' || playRound() === 'Tie game!') {
        //c++
       // }
    }

/* function getPlayerScore() {
    if (playRound() === 'You win!') {
        return pScore += 1
    } else if (playRound() === 'Tie game!') {
        return pScore += 1
    }
    else {
        return pScore += 0
    }
} */

/* function getComputerScore() {
    let cScore = 0
    if (playRound() === 'You lose!') {
        return cScore += 1
    }
    else if (playRound() === 'Tie game!'){
        return cScore += 1
    }
    else {
        return cScore += 0
    }
} */

/*function getPlayerScore() {
    if ((playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() == 'SCISSORS') ||
    (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'PAPER') ||
    (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'ROCK')) {
        return playerScore += 1
    } else if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        return playerScore += 1
    }
} */

/* function getComputerScore() {
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        return computerScore += 1
    }
    else if ((computerSelection.toUpperCase() == 'ROCK' && playerSelection.toUpperCase() == 'SCISSORS') ||
    (computerSelection.toUpperCase() == 'SCISSORS' && playerSelection.toUpperCase() == 'PAPER') ||
    (computerSelection.toUpperCase() == 'PAPER' && playerSelection.toUpperCase() == 'ROCK')){
    return computerScore += 1
    }
} */

function finalScore(playerScore, computerScore) {
    //let playerScore = getPlayerScore()
    //let computerScore = getComputerScore()
    if (playerScore > computerScore) {
        console.log('You win! ' + playerScore + ' to ' + computerScore + '!')
    } else {
        if (computerScore > playerScore) {
            console.log('You lose! ' + playerScore + ' to ' + computerScore + '!')
        } else if (playerScore === computerScore) {
        console.log('Amazing! A perfect tie!')
            }
        }
    }
//const playerSelection = 'rock'
//const computerSelection = 'paper'

function score(playerSelection, computerSelection) {
    let playerScore = 0
    let computerScore = 0
    if (playerSelection.toUpperCase() != 'ROCK' &&  playerSelection.toUpperCase() != 'PAPER' && playerSelection.toUpperCase() != 'SCISSORS') {
        return 'Please choose "rock, paper, or scissors"'
    }else {
        if ((playerSelection.toUpperCase() == 'ROCK' && computerSelection.toUpperCase() == 'SCISSORS') ||
        (playerSelection.toUpperCase() == 'SCISSORS' && computerSelection.toUpperCase() == 'PAPER') ||
        (playerSelection.toUpperCase() == 'PAPER' && computerSelection.toUpperCase() == 'ROCK') && round < 5) {
            return playerScore += 1
        } else if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
            return [playerScore += 1, computerScore += 1]
        }
        else {
        return computerScore += 1
        }
    }
}

    /*
        if (playerSelection > computerSelection) {
            console.log('You win ' + playerscore + ' to ' + computerScore + '!')
        }
        else if (computerSelection > playerSelection) {
            console.log('You lose ' + playerscore + ' to ' + computerScore + '!')
        }
        else {
            console.log('Amazing! A perfect tie!')
        }
} */


//create function game
//call playRound function inside game function
/*play 5 round game
    create integer variable called round
    each time function is called, add one to round
    when round > 5 declare winner or loser */
/*keep score
    create integer variable called playerScore
    create integer variable called computerScore
     */

/*report winner or loser at end
    if playerScore > computerScore output message 'You win ' + playerscore + ' to ' + computerScore + '!'
    if playerScore < computerScore output message 'You lose ' + playerscore + ' to ' + computerScore + '!' */
//notes: input is case insensitive