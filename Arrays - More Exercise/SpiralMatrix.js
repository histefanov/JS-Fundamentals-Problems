function spiral(columns, rows) {
    let matrix = [];
    for (i = 0; i < rows; i++) {
        matrix.push([]);
    }
    let num = 1;
    let startRow = 0;
    let startColumn = 0;
    let endRow = rows - 1;
    let endColumn = columns - 1;
    while (num <= columns * rows) {
        for (let i = startColumn; i <= endColumn; i++) {
            matrix[startRow][i] = num;
            num++
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endColumn] = num;
            num++;
        }
        endColumn--;
        for (let i = endColumn; i >= startColumn; i--) {
            matrix[endRow][i] = num;
            num++;
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startColumn] = num;
            num++;
        }
        startColumn++;
    }
    for (i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    };
}
spiral(5, 5)
// 1  2  3  4  5
// 16 17 18 19 6
// 15 24 25 20 7
// 14 23 22 21 8
// 13 12 11 10 9