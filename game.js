const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const battlerArea = document.getElementById("battler-area");
const scoreCount = document.getElementById("score-count");
const roundCount = document.getElementById("round-count");
const areaBtn = document.getElementById("area-btn");

let rounds = 1;
let playerScore = 0;
let cpuScore = 0;

const weapons = ["Rock", "Paper", "Scissors"];

const cpuSelection = () => {
  let selection = Math.floor(Math.random() * weapons.length);
  return weapons[selection];
};

const round = (cpuSelection, playerSelection) => {
  if (playerSelection == "Rock") {
    if (cpuSelection == "Scissors") {
      return 1;
    } else if (cpuSelection == "Paper") {
      return 2;
    } else {
      return 0;
    }
  } else if (playerSelection == "Paper") {
    if (cpuSelection == "Rock") {
      return 1;
    } else if (cpuSelection == "Scissors") {
      return 2;
    } else {
      return 0;
    }
  } else {
    if (cpuSelection == "Paper") {
      return 1;
    } else if (cpuSelection == "Rock") {
      return 2;
    } else {
      return 0;
    }
  }
};

const createHand = (selection, name) => {
  const imgElement = selection.toLowerCase();
  const handElement = document.createElement("img");
  handElement.setAttribute("src", `../img/${imgElement}.png`);
  handElement.setAttribute("id", `${name}-hand`);

  return handElement;
};

const createhandAreaElement = (name) => {
  const handArea = document.createElement("div");
  handArea.setAttribute("class", `${name}-area`);

  return handArea;
};

const handRender = (selection, name) => {
  const hand = createHand(selection, name);
  const area = createhandAreaElement(name);

  area.appendChild(hand);
  return area;
};

const roundRenderStatus = (message) => {
  const result = document.createElement("div");
  result.setAttribute("class", "c-main-round-status");
  result.setAttribute("id", "round-msg");
  result.textContent = message;
  battlerArea.appendChild(result);
};

const roundRender = (cpu, player) => {
  battlerArea.textContent = "";
  battlerArea.appendChild(cpu);
  battlerArea.appendChild(player);
};

const disablebuttons = () => {
  areaBtn.textContent = "";
};

const createRestartBtn = () => {
  const btn = document.createElement("a");
  btn.setAttribute("class", "restart-btn");
  btn.href = `javascript: location.reload()`;
  btn.textContent = "RESTART";

  areaBtn.appendChild(btn);
};

const createStartPageBtn = () => {
  const btn = document.createElement("a");
  btn.setAttribute("class", "start-btn");
  btn.href = "../index.html";
  btn.textContent = "HOME";

  areaBtn.appendChild(btn);
};

const renderEndBtn = () => {
  areaBtn.textContent = "";
  createStartPageBtn();
  createRestartBtn();
};

const game = (playerSelection) => {
  battlerArea.textContent = "";
  const cpu = cpuSelection();
  const roundWinner = round(cpu, playerSelection);
  const cpuRender = handRender(cpu, "cpu");
  const playerRender = handRender(playerSelection, "player");

  setTimeout(() => {
    roundRender(cpuRender, playerRender);
  }, 200);

  roundCount.textContent = `ROUND:${rounds}`;
  if (roundWinner == 1) {
    playerScore++;
    scoreCount.textContent = `${playerScore}:${cpuScore}`;
  } else if (roundWinner == 2) {
    cpuScore++;
    scoreCount.textContent = `${playerScore}:${cpuScore}`;
  }
  if (roundCount.textContent === "ROUND:5") {
    setTimeout(() => {
      if (playerScore > cpuScore) {
        roundRenderStatus("Victory!");
      } else if (playerScore < cpuScore) {
        roundRenderStatus("Defeat!");
      } else {
        roundRenderStatus("Draw!");
      }
    }, 300);
    renderEndBtn();
  }
  rounds++;
};

btnRock.onclick = function () {
  game(weapons[0]);
};

btnPaper.onclick = function () {};

btnScissors.onclick = function () {};
