function diagonal(input) {
    let matrix = [];
    for (let i = 0; i < input.length; i++) {
        matrix[i] = input[i].split(' ');
    }
    let sum1 = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum1 += Number(matrix[i][i]);
    }
    let sum2 = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum2 += Number(matrix[i][matrix.length - 1 - i]);
    }
    if (sum1 == sum2) {
        let modifiedMatrix = [];
        for (const index1 in matrix) {
            modifiedMatrix[index1] = [];
            for (const index2 in matrix) {
                modifiedMatrix[index1][index2] = sum1;
            }
        }
        for (let i = 0; i < matrix.length; i++) {
            modifiedMatrix[i][i] = matrix[i][i];
        }
        for (let i = 0; i < matrix.length; i++) {
            modifiedMatrix[i][matrix.length - 1 - i] = matrix[i][matrix.length - 1 - i];
        }
        for (let i = 0; i < modifiedMatrix.length; i++) {
            console.log(modifiedMatrix[i].join(' '));
        }
        
    } else {
        for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
        }
    }
}
diagonal(['5 3 12 3 3',
          '11 4 23 2 5',
          '101 12 3 21 10',
          '1 4 5 2 2',
          '5 22 33 11 1'])