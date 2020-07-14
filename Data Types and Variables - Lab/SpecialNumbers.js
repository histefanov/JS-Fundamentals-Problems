function specialNums(number) {
    for (let i = 1; i <= number; i++) {
        let iToString = i.toString();
        let sum = 0;
        for (let j = 0; j < iToString.length; j++) {
            sum += Number(iToString[j]);
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
specialNums(60);