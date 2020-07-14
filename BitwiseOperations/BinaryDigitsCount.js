function binaryCount(number, b) {
    let arr = [];
    let counter = 0;
    
    while (number > 0) {
        let currentBit = number % 2;
        arr.unshift(currentBit);
        number = parseInt(number / 2);
    }

    arr.forEach(x => {if (x === b) counter++});
    console.log(counter)
    
}

binaryCount(10, 0)