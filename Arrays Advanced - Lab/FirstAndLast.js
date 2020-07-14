function firstAndLast(array) {
    let k = array.shift();

    let firstElements = array.slice(0, k)
    let lastElements = array.slice(array.length - k);
    
    return `${firstElements.join(' ')}\n${lastElements.join(' ')}`;
}
firstAndLast([2, 7, 8, 9])
