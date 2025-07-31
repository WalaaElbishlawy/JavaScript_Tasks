var display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
    var lastChar =  display.value.slice(-1); //Gets the last character in the calculator display +
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        display.value = display.value.slice(0, -1) + op; //replace it with the new operator *
    }
    else {
        display.value += op;
    }
}

function clearDisplay() {
  display.value = "";
}

function calculate(){
  display.value = new Function("return " + display.value)();
}