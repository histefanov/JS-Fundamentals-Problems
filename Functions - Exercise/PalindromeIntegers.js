function palindromeIntegers(array) {
    let palindromeCheck = a => {
        let aAsString = a.toString();
        let aAsStringReversed = '';
        for (let i = aAsString.length - 1; i >= 0; i--) {
            aAsStringReversed += aAsString[i];
        }
        
        if (a == aAsStringReversed) {
            return true;
        } else {
            return false;
        }
    }
    
    let result = [];
    for (const number of array) {
        result.push(palindromeCheck(number));
    }
    
    return result.join('\n');
}
palindromeIntegers([32,2,232,1010]);