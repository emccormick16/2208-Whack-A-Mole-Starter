let score = 0;

function showMole() {
  let holes = document.getElementsByClassName("hole");
  let randomNum = Math.floor(Math.random() * 9);
  holes[randomNum].classList.toggle("mole");
}

setInterval(showMole, 1000);

let whackamole = document.getElementById("whack-a-mole");

function updateScore() {
  let scoreid = document.getElementById("score");
  scoreid.innerHTML = score;
}

whackamole.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.matches(".mole")) {
    clickEvent.target.classList.remove("mole");
    score++;
    updateScore();
  }
});
