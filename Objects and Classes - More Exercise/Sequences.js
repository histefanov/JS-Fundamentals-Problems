function solve(input) {
    const arraysMatch = function (arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;
    }

    const arr = input.map(x => {
        return JSON.parse(x).sort((a, b) => b - a);
    }).sort((a, b) => a.length - b.length);  

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arraysMatch(arr[i], arr[j]) === true) {
                arr[j] = 'not unique'
            }
        }
    }

    const result = arr.filter(x => x !== 'not unique');
    result.forEach(x => console.log(`[${x.join(', ')}]`))
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"])