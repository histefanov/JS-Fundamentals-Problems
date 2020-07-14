function equalSides(arr) {
    for (let i = 0; i < arr.length; i++) {

        let sumLeft = 0;
        arr.slice(0, i).forEach(x => sumLeft += x);
        let sumRight = 0;
        arr.slice(i + 1).forEach(x => sumRight += x);

        if (sumLeft === sumRight) {
            return i;
        }
    }

    return -1;
}

let test = equalSides([20,10,-80,10,10,15,35]);
console.log(test);
