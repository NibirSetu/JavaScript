// This is my first JavaScript code
console.log("Hello world");

// Array
let selectedColours = ["blue", "white"];
selectedColours[2] = "green";
selectedColours[3] = 1996;
console.log(selectedColours);

// Functions

// Performating a task
function nibir() {
  console.log("Nibir Setu");
}
nibir();

function BD(name, nextWord) {
  // name is a parameter of the BD function
  console.log("Hello " + name + " " + nextWord);
}
BD("Bangladesh", "people"); // Bangladesh is an argument to the BD function

// Calculating a value

function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);
// or we can write only this bellow line for show the output
console.log(square(5));
