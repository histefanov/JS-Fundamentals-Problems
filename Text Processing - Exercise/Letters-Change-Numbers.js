function solve(input) {
    let arr = input
    .split(' ')
    .filter((x) => x !== '');

    let totalRes = 0;

    for (const str of arr) {
        let firstLetter = str[0];
        let secondLetter = str[str.length - 1];
        let num = Number(str.substring(1, str.length - 1));
        let operandFirst;
        let operandSecond;
        
        if (firstLetter < 'a') {
            operandFirst = firstLetter.charCodeAt() - 64;
            num /= operandFirst;
        } else {
            operandFirst = firstLetter.charCodeAt() - 96;
            num *= operandFirst;           
        }
        
        if (secondLetter < 'a') {
            operandSecond = secondLetter.charCodeAt() - 64;
            num -= operandSecond;
        } else {
            operandSecond = secondLetter.charCodeAt() - 96;
            num += operandSecond;
        }

        totalRes += num
    }

    console.log(totalRes.toFixed(2))
}

solve('P34562Z q2576f   H456z')