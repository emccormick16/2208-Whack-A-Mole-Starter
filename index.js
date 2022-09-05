let score = 0;

function showMole() {
  let holes = document.getElementsByClassName("hole");
  let randomNum = Math.floor(Math.random() * 9);
  holes[randomNum].classList.toggle("mole");
}

let difficulty = document.getElementsByClassName("difficulty")[0];

difficulty.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.matches("#easy")) {
    setInterval(showMole, 2000);
  }
  if (clickEvent.target.matches("#medium")) {
    setInterval(showMole, 1000);
  }
  if (clickEvent.target.matches("#hard")) {
    setInterval(showMole, 300);
  }
});

function updateScore() {
  let scoreid = document.getElementById("score");
  scoreid.innerHTML = score;
}
let whackamole = document.getElementById("whack-a-mole");

whackamole.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.matches(".mole")) {
    clickEvent.target.classList.remove("mole");
    score++;
    updateScore();
  }
});
