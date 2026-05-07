//Tahjay Watson
//0504_Calculator JavaScript file

const displayBox = document.querySelector(".upperDisplay")


//UpdateVar
//Create the functions that update one of your number variables when the calculator’s digit buttons are clicked. 
// Your calculator’s display should also update to reflect the value of that number variable.
//>Start Value
//Number Pressed
//Previous num is added as the last digit 

var displayValueOne = 0;

const calcButtons = document.querySelector(".case");

calcButtons.addEventListener("click", (event) => {
    let target = event.target;
    updateDisplay(target);
});

function updateDisplay(pressedButton) {
    if (pressedButton.closest(".bottomRowLeft")) {
        displayBox.textContent = displayBox.textContent + pressedButton.textContent;
    }else if(pressedButton.closest(".topRow")){
       let storedOperator = chooseOperator(pressedButton.id);
       alert(storedOperator);
        
    }
}


function chooseOperator(operator) {
    switch (operator) { //evaluate based on id

        case "plus":
           return "plus";
        case "minus":
          return "minus";
        case "multiply":
            return "multiply"
        case "divide":
            return "divide";
            break;
    }
}

function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

function div(x, y) {
    if (y != 0) {
        return x / y;
    } else {
        return "Err";
    }
}

function operate(x, y, operand) {
    switch (operand) {
        case "+": add(x, y);
            break;
        case "-": sub(x, y);
            break;
        case "*": mult(x, y);
            break;
        case "/": div(x, y);
            break;
    }

}