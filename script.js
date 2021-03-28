// when buttons are pressed, number shows up on main display

function showNumber() {
  let mainDisplay = document.querySelector("#main-display");
  mainDisplay.innerHTML = `${button.value}`;
}

let button = document.querySelectorAll(".button");

button.addEventListener("click", showNumber);
console.log(button);
