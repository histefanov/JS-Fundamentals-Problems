function swap(array) {
    let swapOperations = Math.ceil(array.length / 2);
    let swappedArray = [];
    for (let i = 0; i < swapOperations; i++) {
        swappedArray[i] = array[array.length - 1 - i];
        swappedArray[array.length - 1 - i] = array[i];
    }
    let result = '';
    for (let element of swappedArray) {
        result += element + ' ';
    }
    console.log(result);    
}
swap(['a', 'b', 'c', 'd', 'e'])