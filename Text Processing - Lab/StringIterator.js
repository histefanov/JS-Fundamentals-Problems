function solve(str) {
    let word = '';
    for (const ch of str) {
        if (ch !== ' ') {
            word += ch;
        } else {
            console.log(word);
            word = '';
        }
    }
    console.log(word)
}

solve("Et cillum do voluptate cillum ut cupidatat aliqua.")