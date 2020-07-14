function calculator(num1, operator, num2) {
    let sum = num1 + operator + num2;
    console.log((eval(sum)).toFixed(2));
}
calculator(5, '-', 6);