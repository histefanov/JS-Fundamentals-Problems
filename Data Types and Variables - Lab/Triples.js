function triples(inputNumber) {
    for (let i = 0; i < inputNumber; i++) {
        for (let j = 0; j < inputNumber; j++) {
            for (let k = 0; k < inputNumber; k++) {
                console.log(`${String.fromCharCode(97 + i, 97 + j, 97 + k)}`);
            }
        }
    }
}
triples(5)