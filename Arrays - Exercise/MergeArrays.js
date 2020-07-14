function merge(array1, array2) {
    let mergedArray = [];
    for (let i = 0; i < array1.length; i++) {
        if (i % 2 == 0) {
            mergedArray[i] = Number(array1[i]) + Number(array2[i]);
        } else {
            mergedArray[i] = array1[i] + array2[i];
        }
    }
    // alternatively: console.log(mergedArray.join(' - '));
    let result = '';
    for (let i = 0; i < mergedArray.length; i++) {
        if (i < mergedArray.length - 1) {
            result += mergedArray[i] + ' - ';
        } else {
            result += mergedArray[i];
        }
    }
    console.log(result);
}
merge(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);