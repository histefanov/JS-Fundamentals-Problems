function solve(word, str) {
    while (str.indexOf(word) > -1) {
        str = str.replace(word, '');
    }
    return str;
}

solve(
    'ice',
    'kicegiciceeb'
)

