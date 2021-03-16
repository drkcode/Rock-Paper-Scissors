function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * options.length);
  return options[random];
}

function playerSelection(opt) {
  return opt.charAt(0).toUpperCase() + opt.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock") {
    if (computerSelection == "Scissors") {
      return 1;
    } else if (computerSelection == "Paper") {
      return 0;
    } else {
      return 2;
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      return 1;
    } else if (computerSelection == "Scissors") {
      return 0;
    } else {
      return 2;
    }
  } else {
    if (computerSelection == "Paper") {
      return 1;
    } else if (computerSelection == "Rock") {
      return 0;
    } else {
      return 2;
    }
  }
}

function game() {
  let rounds = 1,
    playerScore = 0,
    computerScore = 0,
    draws = 0;

  for (let i = 0; i <= 4; i++) {
    let playerOpt = playerSelection(
      prompt(`${rounds}º Round\n\nRock, Paper our Scissors?`)
    );
    let computerOpt = computerPlay();

    if (playRound(playerOpt, computerOpt) == 1) {
      alert(`VICTORY!\n\nPlayer: ${playerOpt} | Computer: ${computerOpt} `);
      playerScore++;
    } else if (playRound(playerOpt, computerOpt) == 2) {
      alert(`DRAW!\n\nPlayer: ${playerOpt} | Computer: ${computerOpt} `);
      draws++;
    } else {
      alert(`DEFEAT!\n\nPlayer: ${playerOpt} | Computer: ${computerOpt} `);
      computerScore++;
    }
    rounds++;
  }

  if (playerScore > computerScore) {
    alert(
      `You Won the Game!\n\nResults:\nPlayer score: ${playerScore}\nComputer score: ${computerScore}\nDraws: ${draws}`
    );
  } else if (playerScore == computerScore) {
    alert(
      `Draw!\n\nResults:\nPlayer score: ${playerScore}\nComputer score: ${computerScore}\nDraws: ${draws}`
    );
  } else {
    alert(
      `CPU Won the Game!\n\nResults:\nPlayer score: ${playerScore}\nComputer score: ${computerScore}\nDraws: ${draws}`
    );
  }
}

game();
