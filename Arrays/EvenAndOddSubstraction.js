function substraction(numbers) {
    let sumOdd = 0;
    let sumEven = 0;
    for (const number of numbers) {
        if (number % 2 == 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }
    console.log(sumEven - sumOdd);
}
substraction([2,4,6,8,10])