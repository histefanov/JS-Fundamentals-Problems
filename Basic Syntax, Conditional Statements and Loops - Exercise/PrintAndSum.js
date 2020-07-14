function printAndSum(firstNum, lastNum) {
    let sum = 0;
    let numbers = [];
    for (let i = firstNum; i <= lastNum; i++) {
        numbers.push(i);
        sum += i;
    }
    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
}
printAndSum(10, 20)