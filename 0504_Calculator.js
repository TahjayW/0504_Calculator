//Tahjay Watson
//0504_Calculator JavaScript file




//Global variables
let arrayMemory = [];
let anOperator = { operatorChosen: false, name: "default" };
let numOne = 0;
let numTwo = null;
let result = 0;

//Select box
const displayBox = document.querySelector(".upperDisplay");
const calcButtons = document.querySelector(".case");

setStartState(0);
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

            switch (anOperator.operatorChosen) {
                case true:
                    if (arrayMemory.length == 2) {
                        print.sayAnd(pressedButton);
                        assign.setSecondVal();
                        arrayMemory[1] = numTwo;
                        break;

                    } else if (numTwo == null) {
                        print.sayClear(pressedButton);
                        assign.setSecondVal();
                        arrayMemory.push(numTwo);
                        break;

                    } else {
                        print.sayAnd(pressedButton);
                        assign.setSecondVal();
                        arrayMemory.push(numTwo);
                        break;

                    }

                case false:
                    if (arrayMemory.length == 1) {
                        setStartState(0);
                        print.sayClear(pressedButton);
                        assign.setFirstVal();
                        break;

                    } else {
                        print.sayAnd(pressedButton);
                        assign.setFirstVal();
                        break;


                    }

            }



            break;
        case "operator":
            if (!anOperator.operatorChosen) {
                anOperator.name = pressedButton.id;
                anOperator.operatorChosen = true;
                assign.setFirstVal();
                if(arrayMemory.length ==0){
                    arrayMemory.push(numOne);
                }else{
                    arrayMemory[0]=numOne;
                }
                
                alert(arrayMemory[0]);

            } else {
                if (eval.isValid()) { //Can we eval?
                    result = eval.preformOperation(anOperator);
                    print.sayClear(result);
                    anOperator.name = pressedButton.id;
                    assign.setFirstVal();
                }

            }
            break;
        case "equals":


        ///Can merge lines 104-107 & 109-112
            if (arrayMemory.length == 1 && anOperator.operatorChosen) {
                assign.setSecondVal();
                result = eval.preformOperation(anOperator);
                print.sayResult();
                assign.setFirstVal();
                setStartState(1);
            }else if(eval.isValid() && anOperator.operatorChosen){
                result = eval.preformOperation(anOperator);
                print.sayResult();
                assign.setFirstVal();
                setStartState(1);
            }else if(displayBox.textContent.length==0){
                assign.setFirstVal();
                
            }
            break;
        case "clear":

            setStartState(0);
            break;


    }
}







//General Use functions


const assign = {
    setFirstVal() {
        if(displayBox.textContent!=""){
            numOne = displayBox.textContent;
        }else{
            displayBox.textContent = 0;
        }
        
    },
    setSecondVal() {

        numTwo = displayBox.textContent;

        if (arrayMemory.length == 2) {
            arrayMemory[1] = numTwo;
        }
    }

}



//Object that controls displayBOx
let print = {
    sayAnd(pressedButton) {
        displayBox.textContent += pressedButton.textContent;
    },

    sayClear(pressedButton) {
        displayBox.textContent = pressedButton.textContent;
    },

    sayResult(){
        displayBox.textContent = result;
    }
}


//Reset function to set states back at 0
function setStartState(arrayLength) {
    arrayMemory.length = arrayLength; //set to 0 at start
    anOperator.name = "default";
    anOperator.operatorChosen = false;
    numTwo = null;
    if(arrayLength==0){
        displayBox.textContent= "";

    }

    
}




//Object that contains formulas and checks if array can preform an operation
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



