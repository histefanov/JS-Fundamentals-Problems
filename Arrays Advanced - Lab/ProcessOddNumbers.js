function processOddNums(arr) {
    let oddNums = arr.filter(a => arr.indexOf(a) % 2 != 0);
    let oddNumsDoubled = oddNums.map(a => a * 2);
    let oddNumsDoubledReversed = [];

    for (const element of oddNumsDoubled) {
        oddNumsDoubledReversed.unshift(element);
    }
    
    return oddNumsDoubledReversed.join(' ');
}
processOddNums([10, 15, 20, 25])