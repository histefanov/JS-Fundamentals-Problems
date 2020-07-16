function solve(str, word) {
    while (str.indexOf(word) > -1) {
        str = str.replace(word, '*'.repeat(word.length))
    }
    console.log(str)
}

solve("A small sentence with some words", "small")