function solve(str, word) {
    let counter = 0;
    str
    .split(' ')
    .forEach(x => {
        if (x === word) {
            counter++;
        }
    })
    return counter;
}

solve(
    "This is a word and it also is a sentence",
    "is"
)