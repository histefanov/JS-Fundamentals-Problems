function oddAndEvenSum(number) {
    let arr = number.toString().split('');
    let oddSum = 0;
    let evenSum = 0;
    let arrOddSum = array => {
        for (const number of array) {
            if (Number(number) % 2 != 0) {
                oddSum += Number(number);
            }
        }
        return oddSum;
    }

    let arrEvenSum = array => {
        for (const number of array) {
            if (Number(number) % 2 == 0) {
                evenSum += Number(number);
            }
        }
        return evenSum;
    }

    return `Odd sum = ${arrOddSum(arr)}, Even sum = ${arrEvenSum(arr)}`;
}
oddAndEvenSum(1000435)