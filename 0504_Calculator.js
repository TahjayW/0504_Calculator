//Tahjay Watson
//0504_Calculator JavaScript file

const displayBox = document.querySelector(".upperDisplay")


//UpdateVar
//Create the functions that update one of your number variables when the calculator’s digit buttons are clicked. 
// Your calculator’s display should also update to reflect the value of that number variable.
//>Start Value
//Number Pressed
//Previous num is added as the last digit 

let storedValue = 0;
let storeOperator = "default";
let calculatorMemory = [];

const calcButtons = document.querySelector(".case");

calcButtons.addEventListener("click", (event) => {
    let target = event.target;
    buttonLogic(target);
});


//We should check whether a stored operator and number exist before accepting/displaying any inputs of the user
function operatorExists(operator) {
    if (operator == "default") {
        return false;
    } else {
        return true;
    }
}

//This runs any time the user presses a button, meaning we have to check states within it
function buttonLogic(pressedButton) {
    //Determine what was pressed before checking state
    switch (determineWhatWasPressed(pressedButton)) {

        //A number was pressed
        case "btnNumber":
            if (operatorExists(storeOperator) && calculatorMemory.length != 0) {
                //There is an operator and number stored   
            }
            if (!operatorExists(storeOperator) && calculatorMemory.length != 0) {
                //There is no operator, but a number is stored    

            }
            if (!operatorExists(storeOperator) && calculatorMemory.length == 0) {
                //There is no operator or number stored
                //Increment display based on value entered
                //This should probably be a function
                updateDisplay(pressedButton);
                //store the value


            }
            break;

        //an operator was pressed
        case "operator":
            //No numbers stored? 
            switch (calculatorMemory.length) {


                case 0: //Our array is empty! No numbers stored.
                    //If there is a number in the display, store it.
                    if (!isDisplayEmpty) {
                        calculatorMemory[0] = displayBox.textContent; //stored value
                        displayBox.textContent = "";
                    } else if (isDisplayEmpty) {//User inputted NOTHING
                        calculatorMemory[0] = 0;
                    }
                    //then store the operator
                    updateOperator(pressedButton);
                    break;
                case 1: //Our array has a value! 1 number is stored.
                    if (!isDisplayEmpty) {
                        calculatorMemory[1] = displayBox.textContent; //stored value CAN I turn this into a function?
                        
                    } else if (isDisplayEmpty) {
                        calculatorMemory[1] = 0; //user inputted NOTHING
                    }
                    updateOperator(pressedButton);
                    break;
                case 2: //Our array has TWO values! lets OPERATE!
                    operate(calculatorMemory[0], calculatorMemory[1], storedOperator);
                    break;

            }

        //equals was pressed
        case "equals":
            //so this would just call operate outright, but do nothing if there aren't two numbers/
            if (calculatorMemory)
                break;

        //clear was pressed
        case "clear":
            clear();
            break;
    }


}

function updateOperator(operator) {
    storedOperator = operator.id;
}

function updateDisplay(aValue) {
    displayBox.textContent += aValue.textContent;
}

function isDisplayEmpty() {
    if (displayBox.textContent = "") {
        return true;
    } else {
        return false;
    }
}

function determineWhatWasPressed(someButton) {
    let typeOfButtonPressed = someButton.className;
    return typeOfButtonPressed;
}


function clear() {
    calculatorMemory.length = 0;
    displayBox.textContent = "";
    storedOperator = "default";
}

function equals() {
    //call chooseOperator and Operate 
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
    switch (operand.id) {
        case "plus": add(x, y);
            break;
        case "minus": sub(x, y);
            break;
        case "multiply": mult(x, y);
            break;
        case "divide": div(x, y);
            break;
    }

}



