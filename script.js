//Assign value to each button
//When button is pressed, value is shown in the console

//Access button value on click
const button = document.querySelectorAll("button");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    console.log(button[i].value);
  });
}

//.forEach((button) => console.log(button.value));
