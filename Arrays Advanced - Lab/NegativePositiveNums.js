function negPosNums(arr) {
    let resultArr = [];

    for (const number of arr) {
        if (number < 0) {
            resultArr.unshift(number);
        } else {
            resultArr.push(number);
        }
    }
    
    return resultArr.join('\n');
}
negPosNums([7, -2, 8, 9])