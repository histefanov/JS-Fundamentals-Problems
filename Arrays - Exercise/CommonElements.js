function common(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                console.log(array1[i]);
            }
        }
    }
}
common(['Hey', 'hello', 2, '4', 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);