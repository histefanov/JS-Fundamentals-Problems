function equalPairs(input) {
    let matrix = input.slice();
    let equalNeighbors = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {

            if (matrix[i][j] === matrix[i][j + 1]) {
                equalNeighbors++;
            }

            if (i < matrix.length - 1 && matrix[i][j] === matrix[i + 1][j]) {
                equalNeighbors++;
            }
        }
    }
    return equalNeighbors;
}
equalPairs([['2', '2', '5', '7', '4'],
            ['4', '0', '5', '3', '4'],
            ['2', '5', '5', '4', '2']])