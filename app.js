// Global Variables

const currValueDisplay = document.querySelector('#curr-value')
const prevValueDisplay = document.querySelector('#prev-value')
const numButtons = document.querySelectorAll('.num-btn');
const operatorButtons = document.querySelectorAll('.op-btn');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equal');
const pointButton = document.querySelector('#point');
const deleteButton = document.querySelector('.del-btn')

// Calculator class

class Calculator {
    constructor (currValueDisplay, prevValueDisplay) {
        this.currValueDisplay = currValueDisplay;
        this.prevValueDisplay = prevValueDisplay;
        this.clear();
    }
    clear() {
        this.currValue = '';
        this.prevValue = '';
        this.operator = undefined;
    }

    delete() {
        this.currValue = this.currValue.toString().slice(0, -1);
    }

    updateDisplay() {
        this.currValueDisplay.innerText = this.currValue;
        this.prevValueDisplay.innerText = this.prevValue;
    }

    appendNum(num) {
        if (num === '.' && this.currValue.includes('.')) return; // This allows us to input only one "." per value
        this.currValue = this.currValue.toString() + num.toString(); //Convert this to string for concatenation, and not addition
    }

    compute() {
        let computation;
        const n2 = +(this.currValue)
        const n1 = +(this.prevValue)

        switch (this.operator) {
            case '+' :
                computation = n1 + n2;
                break;
            case '-' :
                computation = n1 - n2;
                break;
            case '/' :
                computation = n1 / n2;
                break;
            case '*' :
                computation = n1 * n2;
            default:
                return;
        }
        this.currValue = computation;
        this.operator = undefined
        this.prevValue = ''

    }

    chooseOperation(operator) {
        if (this.currValue === '') return; // Prevents from computing and processing the rest of the code below if there are no values present
        
        if (this.prevValue !== '') {
            this.compute();
        } // If both values are present, this allows the compute function to run without have to listen to the equals button
        
        this.operator = operator;
        
        this.prevValue = this.currValue; // This means we are done typing the curr value
        
        this.currValue = ''; // Recycle to input curr value
    }
}

const calculator = new Calculator(currValueDisplay, prevValueDisplay);

numButtons.forEach(numBtn => numBtn.addEventListener('click', (e) => {
    calculator.appendNum(e.target.innerText);
    calculator.updateDisplay();
})    
);

operatorButtons.forEach(opBtn => opBtn.addEventListener('click', (e) => {
    calculator.chooseOperation(e.target.innerText);
    calculator.updateDisplay();

})   
)

clearButton.addEventListener('click', () => {
        calculator.clear();
        calculator.updateDisplay();
        currValueDisplay.innerText = '0'
    })


equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})


