function equalSums(array) {
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            leftSum += array[j];
        }
        for (let k = i + 1; k < array.length; k++) {
            rightSum += array[k];
        }
        if (leftSum == rightSum) {
            console.log(i);
            return;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
    }
    console.log('no');
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);