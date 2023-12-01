// Initialize buttons
let button = document.querySelectorAll('button');

// Initialize number place
let numberView = document.querySelector('.js-number');
let currentNumber = '';

// Function show number
function showNumber(clickedButton) {
let buttonValue = clickedButton.textContent;

if (buttonValue === 'C') {
    currentNumber = '';
} else if (buttonValue === '+/-' && currentNumber !== '') {
    currentNumber = (parseFloat(currentNumber) * -1).toString();
} else if (buttonValue === '%' && currentNumber !== '') {
    currentNumber = (parseFloat(currentNumber) / 100).toString();
} else if (buttonValue === '=') {
    try {
        currentNumber = eval(currentNumber).toString();
    } catch (error) {
        currentNumber = 'Error';
    }
} else {
    currentNumber += buttonValue;
}

// Update the display
numberView.innerText = currentNumber;

// If for checking the length
if (currentNumber.length > 7) {
    numberView.innerText = '...';
}
}
