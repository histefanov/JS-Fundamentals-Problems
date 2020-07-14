function orbit(input) {
    let matrix = [];
    for (let i = 0; i < input[0]; i++) {
        matrix[i] = [];
        for (let j = 0; j < input[1]; j++) {
            matrix[i][j] = undefined;
        }
    }
    let row = input[2];
    let column = input[3];
    matrix[row][column] = 1;
    let distance = 1;
    let num = 2;
    let isNotFilled = true;
    while (isNotFilled) {
        isNotFilled = false;
        for (let i = column - distance; i <= column + distance; i++) {
            let j = row - distance;
            let k = row + distance;
            if (i >= 0 && i < input[0]) {
                if (j >= 0 && j < input[0]) {
                    matrix[j][i] = num;
                }
                if (k >= 0 && k < input[0]) {
                    matrix[k][i] = num;
                }
            }
        }
        for (let i = row - distance; i <= row + distance; i++) {
            let j = column - distance;
            let k = column + distance;
            if (i >= 0 && i < input[0]) {
                if (j >= 0 && j < input[0]) {
                    matrix[i][j] = num;
                }
                if (k >= 0 && k < input[0]) {
                    matrix[i][k] = num;
                }
            }
        }
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].includes(undefined)) {
                isNotFilled = true;
                num++;
                distance++;
                break;
            }
        }
    }
    for (const row of matrix) {
        console.log(row.join(' '));
    }
}
orbit([4, 4, 0, 0])