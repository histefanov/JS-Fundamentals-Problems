function amazingNumbers(inputNum) {
    let number = inputNum;
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = parseInt(number / 10);
    }
    let sumAsString = sum.toString();
    let isAmazing = sumAsString.includes('9');
    // for (let i = 0; i < sumAsString.length; i++) {
    //     if (Number(sumAsString[i]) == 9) {
    //         isAmazing = true;
    //         break;
    //     }
    // }
    console.log(`${inputNum} Amazing? ${isAmazing ? 'True' : 'False'}`)
}
amazingNumbers(9992);