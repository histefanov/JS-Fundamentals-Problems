function calculator(firstOperand, secondOperand, operator) {
    let operation = null;
    switch (operator) {
        case 'multiply':
            operation = (a, b) => a * b;
            break;
        case 'divide':
            operation = (a, b) => a / b;
            break;
        case 'add':
            operation = (a, b) => a + b;
            break;
        case 'subtract':
            operation = (a, b) => a - b;
            break;
    }
    return(operation(firstOperand, secondOperand))
}