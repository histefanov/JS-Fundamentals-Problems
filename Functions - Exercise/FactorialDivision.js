factorialDivision = (numOne, numTwo) => {
    let factorial = a => {
        if (a == 1) {
            return 1;
        } else {
            return a * factorial(a - 1);
        }
    }
    
    let division = (a, b) => {
        return (a / b).toFixed(2);
    }

    return division(factorial(numOne), factorial(numTwo));
}
factorialDivision(5, 2) 