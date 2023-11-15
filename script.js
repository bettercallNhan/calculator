// let display = document.getElementById('display');
let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    }
    else {
        currentInput += number;
    }

    //    display.value = currentInput;
    display.textContent = currentInput;
    console.log('working')
}
function appendOperator(operator) {
    if (currentInput !== '') {
        if (currentInput === '0') {
            currentInput = operator;
        }
        else {
            currentInput += operator
        }

        //        display.value = currentInput;
        display.textContent = currentInput;

    }
    else {
        //     alert("Nhap so di");
    }
    console.log('working')

}
function clearDisplay() {
    if (currentInput !== '') {
        //        display.value = '';
        display.textContent = '0';
        currentInput = '0';

    }
    else {
        //        alert("Nhap so di");
    }
    console.log('working')
}
function calculate() {
    if (currentInput !== '') {
        try {
            currentInput = currentInput.replace(/(\++)/g, '+')
            currentInput = eval(currentInput).toString();
            //            display.value = currentInput;
            display.textContent = currentInput;

        } catch (error) {
            //            display.value = 'error';
            display.textContent = 'error';
            currentInput = '0';
        }
    }
    else {
        //        alert("Nhap lai di");
    }
}
function clearone() {
    if (currentInput !== '') {
        if (currentInput.length > 1) {
            currentInput = currentInput.slice(0, -1);
        }
        else if (currentInput !== "0") {
            currentInput = '0';
        }
    }
    else {
        //       alert("Nhap so di");
        return false;
    }
    display.textContent = currentInput;

}

console.log('working')
