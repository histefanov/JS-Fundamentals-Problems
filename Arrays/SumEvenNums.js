function sumEven(numbers) {
    let sum = 0;
    for (const element of numbers) {
        if (Number(element) % 2 == 0) {
            sum += Number(element);
        }
    }
    console.log(sum);
}
sumEven(['1','2','3','4','5','6'])