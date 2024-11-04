function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (randomNumber === 1) {
        computerChoice = "Rock";
    } else if (randomNumber === 2) {
        computerChoice = "Paper";
    } else if (randomNumber === 3) {
        computerChoice = "Scissors";
    } else {
        computerChoice = "This is not working"; 
    }
    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Choose one of \"Rock\", \"Paper\" or \"Scissors\":", "");
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1))
    return humanChoice;
}



function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let humanChoices = getHumanChoice();
        let computerChoices = getComputerChoice();
        let result = "";
    
        if (humanChoices === "rock" && computerChoices === "Rock") {
            result = "It's a tie!";
        } else if (humanChoices === "rock" && computerChoices === "Paper") {
            result = "You lose! Paper beats Rock!";
            computerScore ++;
        } else if (humanChoices === "rock" && computerChoices === "Scissors") {
            result = "You win! Rock beats Scissors!";
            humanScore ++;
        } else if (humanChoices === "paper" && computerChoices === "Rock") {
            result = "You win! Paper beats Rock!";
            humanScore ++;
        } else if (humanChoices === "paper" && computerChoices === "Paper") {
            result = "It's a tie!";
        } else if (humanChoices === "paper" && computerChoices === "Scissors") {
            result = "You lose! Scissors beats Paper!";
            computerScore ++;
        } else if (humanChoices === "scissors" && computerChoices === "Rock") {
            result = "You lose! Rock beats Scissors!";
            computerScore ++;
        } else if (humanChoices === "scissors" && computerChoices === "Paper") {
            result = "You win! Scissors beats Paper!";
            humanScore ++;
        } else if (humanChoices === "scissors" && computerChoices === "Scissors") {
            result = "It's a tie!";
        } 
    
        console.log(result);
        return result;
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (computerScore < humanScore) {
        console.log("You won the game! The final score is: ")
    } else if (computerScore === humanScore) {
        console.log("It's a tie! The final score is: ")
    } else {
        console.log("You lost the game! The final score is: ")
    }

    //console.log("The final score is: ")
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

playGame();