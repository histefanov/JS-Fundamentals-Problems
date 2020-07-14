function matrices(matrix) {
    let isMagical = true;
    let magicSum = matrix[0].reduce(function(a, b){return a + b});
    for (let i = 0; i < matrix.length; i++) {
        let sumRow = 0;
        let sumColumn = 0;
        for (let j = 0; j < matrix.length; j++) {
            sumRow += matrix[i][j];
            sumColumn += matrix[j][i];
        }
        if (sumRow != magicSum || sumColumn != magicSum) {
            isMagical = false;
            break;
        }
    }
    console.log(isMagical);
}
matrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])