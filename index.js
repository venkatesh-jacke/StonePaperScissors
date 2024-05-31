let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");
const user=document.querySelector("#user-score");
const computer=document.querySelector("#comp-score");

const generateComputerChoice = () => {
  const choices = ["stone", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * choices.length);
  return choices[randomIdx];
};
const playGame = (userChoice) => {
  const computerChoice = generateComputerChoice();
  if (userChoice === computerChoice) {
    drawGame();
  } else {
    let userWinner = true;
    if (userChoice == "stone") {
      userWinner = computerChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWinner = computerChoice == "scissors" ? false : true;
    } else {
      userWinner = computerChoice == "stone" ? false : true;
    }
    displayWinner(userWinner);
  }
};

const displayWinner = (userWinner) => {
  if (userWinner) {
    userScore+=1;
    user.innerText=userScore;
    console.log("User Won");
    msg.innerText = "You Won";
    msg.style.backgroundColor = "green";
  } else {
    compScore+=1;
    computer.innerText=compScore;
    console.log("Computer Won");
    msg.innerText = "You Lost";
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  console.log("Draw Game");
  msg.innerText = "Draw Game, Play Again";
  msg.style.backgroundColor = "black";
};
choices.forEach((choice) =>
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
);
