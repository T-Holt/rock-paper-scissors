//create string variable for player
//let playerSelection = prompt('Rock, paper, or scissors?')
const playerSelection = 'Rock';
//create string variable for computer
const computerSelection = getComputerChoice();
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


const capitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)

function playRound(playerSelection, computerSelection) {
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
//notes: input is case insensitive