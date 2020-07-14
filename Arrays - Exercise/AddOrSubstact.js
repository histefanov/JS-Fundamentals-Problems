function addOrSubstract(array) {
    let sumOriginal = 0;
    let sumModified = 0;
    for (const number of array) {
        sumOriginal += number;
    }
    for (const index in array) {
        if (array[index] % 2 == 0) {
            array[index] += Number(index);
        } else {
            array[index] -= Number(index);
        }
    }
    for (const number of array) {
        sumModified += number;
    }
    console.log(array);
    console.log(sumOriginal);
    console.log(sumModified);
}
addOrSubstract([-5, 11, 3, 0, 2])