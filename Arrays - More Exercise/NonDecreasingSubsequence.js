function subsequence(array) {
    let product = [];
    let maxNumber = 0;
    let productIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= maxNumber) {
            product[productIndex] = array[i];
            maxNumber = array[i]
            productIndex++;
        }
    }
    let result = '';
    for (const number of product) {
        result += number + ' ';
    }
    console.log(result);
}
subsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);