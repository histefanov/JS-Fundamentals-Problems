function condense(numbers) {
    let condensedArray = [];
    while (numbers.length > 1) {
        for (let i = 0; i < numbers.length - 1; i++) {
            condensedArray[i] = numbers[i] + numbers[i + 1];
        }
        numbers = condensedArray;
        condensedArray = [];
    }
    console.log(numbers[0]);
}
condense([1])