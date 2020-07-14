function positiveOrNegative(numOne, numTwo, numThree) {
    let arr = [numOne, numTwo, numThree];
    let negatives = arr.filter(a => a < 0);
    return negatives.length % 2 == 0 || arr.includes(0) ? 'Positive' : 'Negative';
}
