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

    console.log(humanChoice)
    return humanChoice;
}



function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let humanChoices = getHumanChoice();
        let computerChoices = getComputerChoice();
        let result = "";
    
        if (humanChoices === "Rock" && computerChoices === "Rock") {
            result = "It's a tie!";
        } else if (humanChoices === "Rock" && computerChoices === "Paper") {
            result = "You lose! Paper beats Rock!";
            computerScore ++;
        } else if (humanChoices === "Rock" && computerChoices === "Scissors") {
            result = "You win! Rock beats Scissors!";
            humanScore ++;
        } else if (humanChoices === "Paper" && computerChoices === "Rock") {
            result = "You win! Paper beats Rock!";
            humanScore ++;
        } else if (humanChoices === "Paper" && computerChoices === "Paper") {
            result = "It's a tie!";
        } else if (humanChoices === "Paper" && computerChoices === "Scissors") {
            result = "You lose! Scissors beats Paper!";
            computerScore ++;
        } else if (humanChoices === "Scissors" && computerChoices === "Rock") {
            result = "You lose! Rock beats Scissors!";
            computerScore ++;
        } else if (humanChoices === "Scissors" && computerChoices === "Paper") {
            result = "You win! Scissors beats Paper!";
            humanScore ++;
        } else if (humanChoices === "Scissors" && computerChoices === "Scissors") {
            result = "It's a tie!";
        } 
    
        console.log(result);
        return result;
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    console.log(humanScore);
    console.log(computerScore);
}

playGame();