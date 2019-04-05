
let playerScore = 0;
let computerScore = 0;

const scoreBoard = document.getElementById('scores');
const message = document.getElementById('message');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', pressedButton));

function pressedButton(e){
  const choice = e.target.className;
  let results = playRound(choice, randomPlay());

  if (results[0]) playerScore++;
  else if (results[1]) computerScore++;
  console.log(scoreBoard);
  scoreBoard.children[0].textContent = playerScore;
  scoreBoard.children[1].textContent = computerScore;

  if (playerScore >= 5){
    playerScore = 0;
    computerScore = 0;
    message.textContent = "🙌🎉✨";
  }
  else if (computerScore >= 5){
    playerScore = 0;
    computerScore = 0;
    message.textContent = "💥🤕🌧";

  }
}



function playRound(playerSelection, computerSelection){
  let newMessage = getEmoji(playerSelection) + " " + getEmoji(computerSelection);
  message.textContent = newMessage;//"You chose " + playerSelection + " | They chose "+ computerSelection;

  if (playerSelection === computerSelection) {
    return [0,0];
  }
  else if (playerSelection == "rock"){
    if (computerSelection == "paper") return [0,1];
    else if (computerSelection == "scissors") return [1,0];
  }
  else if (playerSelection == "paper"){
    if (computerSelection == "rock") return [1,0];
    else if (computerSelection == "scissors") return [0,1];
  }
  else if (playerSelection == "scissors"){
    if (computerSelection == "rock") return [0,1];
    else if (computerSelection == "paper") return [1,0];
  }
  else if (playerSelection == "to quit") return;
}

function getEmoji(text){
  if (text == "rock") return '✊';
  else if (text == "paper") return '🖐';
  else if (text == "scissors") return '✌️';
}

function randomPlay(){
  let choice = oneTwoOrThree();
  if (choice == 1) return 'rock';
  else if (choice == 2) return 'paper';
  else return 'scissors';
}

function oneTwoOrThree(){
  return Math.floor(Math.random() * 3) + 1;
}

// function game(){
//   let playerScore = 0
//   let computerScore = 0
//
//   while (playerScore < 5 && computerScore < 5){
//     let results = playRound(askPlayerToChoose(), randomPlay())
//
//     playerScore += results[0]
//     computerScore += results[1]
//     console.log('player: '+ playerScore + ' | computer: '+ computerScore)
//   }
//
//   console.log("We have a winner!");
//   return;
// }

// function askPlayerToChoose(){
//   let playerChoice = prompt('Rock, Paper, or Scissors?');
//
//   if (playerChoice === null ) {
//     return 'to quit';
//   }
//   else if(playerChoice == ""){
//     playerChoice = randomPlay();
//     console.log("We chose " + playerChoice + " for you.");
//     return playerChoice;
//   }
//
//   let firstLetter = playerChoice[0];
//
//   if (firstLetter == "R" || firstLetter == "r"){
//     return "rock";
//   }
//   else if (firstLetter == "P" || firstLetter == "p"){
//     return "paper";
//   }
//   else if (firstLetter == "S" || firstLetter == "s"){
//     return "scissors";
//   }
//   else return askPlayerToChoose();
// }
