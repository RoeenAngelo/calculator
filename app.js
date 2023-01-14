// Global Variables

const firstValueDisplay = document.querySelector('#first-value')
const secondValueDisplay = document.querySelector('#second-value')
const numButtons = document.querySelectorAll('.num-btn');
const operatorButtons = document.querySelectorAll('.op-btn');
const clearButton = document.querySelector('#clear');
const equalButton = document.querySelector('#equal');
const pointButton = document.querySelector('#point');

class Calculator {
    constructor (firstValueDisplay, secondValueDisplay) {
        this.firstValueDisplay = firstValueDisplay;
        this.secondValueDisplay = secondValueDisplay;
        this.clear();
    }
    clear() {
        this.firstValue = '';
        this.secondValue = '';
        this.operator = undefined;
    }

    delete() {

    }

    updateDisplay() {
        this.firstValueDisplay.innerText = this.firstValue;
        this.secondValueDisplay.innerText = this.secondValue;

    }

    appendNum(num) {
        if (num === '.' && this.firstValue.includes('.')) return;
        this.firstValue = this.firstValue.toString() + num.toString()
    }

    operate(n1,operator,n2) {
        n1 = +(this.firstValue)
        n2 = +(this.secondValue)
        operator = this.operator;
        
        switch (this.operator) {
            case '+' :
                 return add(n1,n2)
            case '-' :
                 return subtract(n1,n2);
            case '/' :
                return n2 === 0 ? null : divide(n1,n2);
            case '*' :
                 return multiply(n1,n2);
        }
    }

    chooseOperation() {
        
    }
}

const calculator = new Calculator(firstValueDisplay, secondValueDisplay);

numButtons.forEach(numBtn => numBtn.addEventListener('click', (e) => {
    calculator.appendNum(e.target.innerText);
    calculator.updateDisplay();
})    
);

operatorButtons.forEach(opBtn => opBtn.addEventListener('click', (e) => {
    calculator.updateDisplay();
    calculator.chooseOperation();
})   
)

clearButton.addEventListener('click', () => {
        calculator.clear();
        calculator.updateDisplay();
        firstValueDisplay.innerText = '0'
    })


// Operators

function add(n1,n2) {
    return n1 + n2;
}

function subtract(n1,n2) {
    return n1 - n2;
}

function divide(n1,n2) {
    return n1 / n2;
}

function multiply(n1,n2) {
    return n1 * n2;
}




