//create string variable for player
//let playerSelection = prompt('Rock, paper, or scissors?')
const playerSelection = 'rock';
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
function playRound(playerSelection, computerSelection) {
    if (playerSelection != 'rock' ||  playerSelection != 'paper' || playerSelection != 'scissors') {
        return 'Please choose "rock, paper, or scissors"'
    }else {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
            return 'You win!' + playerSelection + ' beats ' + computerSelection + '!'
        }else {
        return 'You lose!' + computerSelection + ' beats ' + playerSelection + '!'
        }
    }
}
//notes: input is case insensitive