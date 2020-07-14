function intOrFloat(number1, number2, number3) {
    let sum = number1 + number2 + number3;
    let typeOfNumber = sum % 1 == 0;
    console.log(`${sum} - ${typeOfNumber ? 'Integer' : 'Float'}`)
}
intOrFloat(9, 100, 1);