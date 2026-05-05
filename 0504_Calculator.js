//Tahjay Watson
//0504_Calculator JavaScript file

//First on the to do list is to create event listeners for each button.
//Event propagation is likely the best way to go forward
//I'll be referencing the RPS_Script.js & etch-a-sketch.js files for this as they have a similar setup with the buttons and divs.

//The flow should be
//1. User clicks a button
//2. Button click is registered and the value of the button is stored in a variable
//3. If the value of the button is a number, display it
//Just for debug to see if we can get this working. We'll add additional logic from there.


//First, select buttons woop woop
//I want to turn lines  18-23 into a function to be reused.
const numberContainer = document.querySelector(".numberContainer");
var displayDigit = document.querySelector(".displayDigit");
numberContainer.addEventListener("click", (event) => {
    let target = event.target;
    displayDigit.textContent = target.textContent;

});




//Calculators let you override previous numbers if you hit one number
//To emulate that we're going to use a "currentValue" variable that will be overridden if the user
//presses another number button instead of an operand.
//I'm thinking the workflow should be like this:


//1. Current value is assigned 0 at start
//2. We check input every time a button is pressed. 
//2.A if the button is a number, override "currentValue" with the value of the button. 
//2.B if the button is an operand, apply no changes to the "currentValue", store the operand in "currentOperand"
//3.If there is a value within "currentValue" and "currentOperand", the next number should  change the display to the result


//What does this look like? Am I missing something? Probably but we'll come back to it

var currentValue = 0;
var currentOPerand = "";



var chooseOperand = document.querySelector(".operandContainer");
chooseOperand.addEventListener("click", (event) => {
    let target = event.target;
    currentOperand = target.textContent;
});

