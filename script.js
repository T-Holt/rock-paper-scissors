function getComputerChoice() {
    const arr = ['Rock', 'Paper', 'Scissors'];
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}

function checkNull(playerSelection) {
    if (playerSelection === null) {
        return 'You forfeited!'
    } else {
        return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }
}

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt('Rock, paper, or scissors?')
    let capitalized = checkNull(playerSelection)
    if (playerSelection === null) {
        return 'Game over!'
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
    if (result.includes('win') === true) {
        p += 1
    }
    else if (result.includes('lose') === true) {
        c +=1
    }
    else if (result === 'Please choose "rock, paper, or scissors"') {
        i -= 1
    }
    else if (result === 'Game over!') {
        i = 5
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