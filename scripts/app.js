
// Use querySelector to get the input element
let numberInput = document.querySelector("#numberInput");
// Add an eventListener to the numberInput to listen for changes
  // If the input value is above 10 or below -10, print an alert().

numberInput.addEventListener("input", function () {
  const number = Number(numberInput.value);
  if (number <= -10 || number >= 10) {
    alert("The number should be between -10 and 10");
  }
});
// Create an object for a fruit 
const fruit = {
  name: "Apple",
  color: "Red",
  taste: "Sweet"
};
//Use querySelector to get the elements for each fruit object property
let nameElement = document.querySelector("#name");
let colorElement = document.querySelector("#color");
let tasteElement = document.querySelector("#taste");
//Use innerHTML to set the string, use a Template Literals for each to combine the fruit field name and the value
nameElement.innerHTML = `Name: ${fruit.name}`;
colorElement.innerHTML = `Color: ${fruit.color}`;
tasteElement.innerHTML = `Taste: ${fruit.taste}`;
