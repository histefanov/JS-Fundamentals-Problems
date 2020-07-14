function rowSumOddNumbers(n) {
    let firstNum = 1;
    
    for (let i = 0; i < n; i++) {
        firstNum += i * 2;
    }
    
    let sum = 1 / 2 * n * (2 * firstNum + (n - 1) * 2);
    return sum;
}
rowSumOddNumbers(42 )