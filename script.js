// when buttons are pressed, number shows up on main display

let number = document.querySelectorAll(".number");

function showNumber() {
  let mainDisplay = document.querySelector("#main-display");
  mainDisplay.innerHTML = `${number.value}`;
}

number.addEventListener("click", showNumber);
