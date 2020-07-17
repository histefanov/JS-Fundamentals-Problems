function solve(str) {
    let res = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            res += str[i];
        }
    }

    console.log(res);
}

solve('qqqwerqwecccwd')