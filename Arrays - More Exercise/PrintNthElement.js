function nthElement(array) {
    let step = Number(array[array.length - 1]);
    let result = '';
    for (i = 0; i < array.length; i += step) {
        if (i != array.length - 1) {
            result += array[i] + ' ';
        }
    }
    console.log(result);
}
nthElement(['dsa', 'asd', 'test', 'test', '2'])