//create string variable for player
let playerSelection = prompt('Rock, paper, or scissors?')
//create string variable for computer
let computerSelection = getComputerChoice()
//randomly return 'Rock', 'Paper', or 'Scissors'
function getComputerChoice ('Rock', 'Paper', 'Scissors') {
    return [Math.floor(Math.random() * array.length)];
}
//store in computer variable
//ask user 'Rock, paper, or scissors?

//store user input in player variable
/*if user picks 'Rock' && computer picks 'Scissors'
            ||  'Paper' && computer picks 'Rock'
            ||  'Scissors' && computer picks 'Paper'
        output message 'You win!' + 'player variable' + ' beats ' 'computer variable' +'!'
    else output message 'You lose!' + 'computer variable' + ' beats ' 'player variable' +'!' */
function playRound(playerSelection, computerSelection) {
    if (playerSelection != 'rock' ||  playerSelection != 'paper' || playerSelection != 'scissors') {
        alert 'Please choose "rock, paper, or scissors"'
    }else {
    if (playerSelection = 'rock' && computerSelection = 'scissors') ||
        (playerSelection = 'scissors' && computerSelection = 'paper') ||
        (playerSelection = 'paper' && computerSelection = 'rock') {
            alert 'You win!' + playerSelection ' beats ' + computerSelection + '!'
        }else {
        alert 'You lose!' + computerSelection ' beats ' + playerSelection + '!'
        }
    }
}
//notes: input is case insensitive