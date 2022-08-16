function getComputerChoice() {
    const arr = ['Rock', 'Paper', 'Scissors'];
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}

/* function checkNull() {
    if (playerSelection === null) {
        return 'You forfeited!'
    } else (
        let capitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
        return capitalized
    )
} */

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt('Rock, paper, or scissors?')
    const capitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    if (playerSelection === null) {
        return 'You forfeited!'
    }
    else if (playerSelection.toUpperCase() != 'ROCK' &&  playerSelection.toUpperCase() != 'PAPER' && playerSelection.toUpperCase() != 'SCISSORS') {
        return 'Please choose "rock, paper, or scissors"'
    } 
    else {
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

function game() {
     let p = 0
     let c = 0
     for (i=0; i<5; i++) {
        let result = playRound()
        console.log(result)
    if (result === 'You win! ' + capitalized + ' beats ' + computerSelection.toLowerCase() + '!') {
        p += 1
    }
    else if (result === 'You lose! ' + computerSelection + ' beats ' + playerSelection.toLowerCase() + '!') {
        c +=1
    }
    else if (result === 'Please choose "rock, paper, or scissors"') {
        i -= 1
    }
    }
    if (p > c) {
        console.log('You win! ' + p + ' to ' + c + '!')
    }
    else if (c > p) {
        console.log('You lose! ' + p + ' to ' + c + '!')
    }
    else if (p === c) {
        console.log('Amazing! A perfect tie!')
    }
}