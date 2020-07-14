function topInteger(array) {
    let result = '';
    let isTop = true;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            result += array[i] + ' ';
        }
        isTop = true;
    }
    console.log(result);
}
topInteger([27, 19, 42, 2, 13, 45, 48]);