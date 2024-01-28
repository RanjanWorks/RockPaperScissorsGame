let choices = document.querySelectorAll("[data-choice]");
let msg1 = document.getElementById("msg1");
let msg2 = document.getElementById("msg2");
let yscore = document.getElementById("yscore");
let cscore = document.getElementById("cscore");
let plyerscore = 0;
let computerscore = 0;

let computerChoices = ["rock", "paper", "scissors"];

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let playerchoice = choice.dataset.choice;

    let randomNum = Math.floor(Math.random() * computerChoices.length);

    let computerchoice = computerChoices[randomNum];
    playGame(playerchoice, computerchoice);
  });
});

function playGame(playerchoice, computerchoice) {
  msg2.textContent = `Computer Chosses ${computerchoice}`;

  if (playerchoice === computerchoice) {
    msg2.textContent = `Computer also Chosses ${computerchoice}`;

    showMsg("Draw");

    return;
  }

  const playerwinCondition = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerwinCondition[playerchoice] === computerchoice) {
    showMsg("You Won !");
    plyerscore++;
    showScore();
  } else {
    showMsg("You Lost !");
    computerscore++;
    showScore();
  }
}

function showMsg(msg) {
  msg1.textContent = msg;
}

function showScore() {
  yscore.textContent = plyerscore;
  cscore.textContent = computerscore;
}
