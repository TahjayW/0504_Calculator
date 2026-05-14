//Tahjay Watson
//0504_Calculator JavaScript file



//Global variables
let arrayMemory = [];
let anOperator = { operatorChosen: false, name: "default" };
let numOne = 0;
let numTwo = 0;
let result = 0;

//Select box
const displayBox = document.querySelector(".upperDisplay");
const calcButtons = document.querySelector(".case");


//detect input
calcButtons.addEventListener("click", (event) => {
    let target = event.target;
    buttonLogic(target);
});



//determine action
function buttonLogic(pressedButton) {
    switch (pressedButton.className) {
        case "btnNumber":
            //Determine which number is being assigned a value
            if (!anOperator.operatorChosen && arrayMemory.length == 0) {

                print.sayAnd(pressedButton);
                assign.setFirstVal();
                alert(numOne);  
            }
            else {
                print.sayAnd(pressedButton);
                assign.secondVal;

            }
            break;
        case "operator":
            if (!anOperator.operatorChosen) {
                anOperator.name = pressedButton.id;
                anOperator.operatorChosen = true;
                assign.setFirstVal;
                arrayMemory.push(numOne);
                alert(arrayMemory[0]);

            } else {
                if (eval.isValid) { //Can we eval?
                    result = eval.preformOperation(anOperator);
                    print.sayClear(result);
                    anOperator.name = pressedButton.id;
                    assign.setFirstVal;
                }

            }
            break;
        case "equals":
            if (arrayMemory.length == 1 && anOperator.operatorChosen) {
                assign.secondVal;
                result = eval.preformOperation(anOperator);
                print.sayClear(result);
                assign.setFirstVal;
                arrayMemory.length = 1;
            }
        case "clear":
            setStartState;
            break;


    }
}



//set start state



//General Use functions


const assign = {
    setFirstVal : function(){
        numOne = displayBox.textContent;
    },
    setSecondVal : function(){
        numTwo = displayBox.textContent;
    }
    
}


let print = {
    sayAnd(pressedButton) {
        displayBox.textContent += pressedButton.textContent;
    },

    sayClear(pressedButton) {
        displayBox.textContent = pressedButton.textContent;
    }
}

function setStartState() {
    arrayMemory.length = 0;
    anOperator.name = "default".operatorChosen = true;
}

let eval = {
    isValid() {
        if (arrayMemory.length = 2) {
            return true;

        } else {
            return false
        }
    },
    preformOperation(anOperator) {
        switch (anOperator.name) {
            case "plus":
                result = numOne + numTwo;
                return result;
            case "minus":
                result = numOne - numTwo;
                return result;

            case "multiply":
                result = numOne * numTwo;
                return result;

            case "divide":
                if (numTwo != 0) {
                    result = numOne / numTwo;
                    return result;

                } else {
                    result = "error"
                    return result;

                }
        }
    }

}



