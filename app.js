// declaring vairables and cacheing the dom
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

//declaring functions to ditermine outcomes
function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = userChoice + " beats " + compChoice + ". You win!"
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = userChoice + " loses to " + compChoice + ". Try Again!"
}

function draw(userChoice, compChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = userChoice + " ties with " + compChoice + ". Try Again!"
}

function game(userChoice){
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "scissorspaper":
        case "paperrock":
        case "rockscissors":
            win(userChoice, compChoice);
            break;
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            lose(userChoice, compChoice);
            break;
        case "scissorsscissors":
        case "paperpaper":
        case "rockrock":
            draw(userChoice, compChoice);
            break;
    }
}

//Actually putting the different outputs against eachother
function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}

main();