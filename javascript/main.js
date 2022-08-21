const ruleBtn = document.querySelector("#rules-btn")
const ruleModal = document.querySelector("#rule-modal")
const main = document.querySelector("main")
const score = document.querySelector("#points")
const wl = document.querySelector("#result-title")

let contador = 0
let classe
const list = ["rock", "paper", "scissors"]
let w

const housePick = () => {
  classe = list[Math.floor(Math.random() * 3)]
}

function callOptions() {
  main.innerHTML = `
  <div id="options-box">
  <div class="rock row" onclick="choices('rock')">
    <img src="/images/icon-rock.svg" alt="Pedra"/>
  </div>

<div class="paper row" onclick="choices('paper')">
  <img src="/images/icon-paper.svg" alt="Papel"/>
</div>

<div class="scissors row" onclick="choices('scissors')">
  <img src="/images/icon-scissors.svg" alt="Tesoura"/>
</div>
</div>
`
}

function rock() {
  switch (classe) {
    case "paper":
      contador--
      w = "You Lose"
      break
    case "scissors":
      contador++
      w = "You Win"
      break
    case "rock":
      w = "Draw"
  }

  if (contador < 0) {
    contador = 0
  }

  score.innerHTML = contador
}

function paper() {
  switch (classe) {
    case "rock":
      contador++
      w = "You Win"
      break
    case "paper":
      w = "Draw"
      break
    case "scissors":
      contador--
      w = "You lose"
  }

  if (contador < 0) {
    contador = 0
  }

  score.innerHTML = contador
}

function scissors() {
  switch (classe) {
    case "scissors":
      w = "Draw"
      break
    case "rock":
      contador--
      w = "You lose"
      break
    case "paper":
      contador++
      w = "You win"
  }

  if (contador < 0) {
    contador = 0
  }

  score.innerHTML = contador
}

function choices(c) {
  housePick()

  switch (c) {
    case "rock":
      rock()
      break
    case "paper":
      paper()
      break
    case "scissors":
      scissors()
  }

  main.innerHTML = `
  <div id="choices" class="row">
  <div id="you-picked" class="row">
    <h1>You picked</h1>
    <div class="${c} row">
      <img src="/images/icon-${c}.svg" alt="Papel" />
    </div>
  </div>

  <div id="result">
    <h1 id="result-title">${w}</h1>
    <button class="play-again-btn" onclick="callOptions()">Play again</button>
  </div>

  <div id="house-picked" class="row">
    <h1>House picked</h1>
    <div class="mockup">
       <div class="${classe} row">
             <img src="/images/icon-${classe}.svg" alt="${classe}"/>
       </div>
    </div>
  </div>
</div>
  `
}

ruleBtn.addEventListener("click", () => {
  ruleModal.classList.toggle("hid")
})
