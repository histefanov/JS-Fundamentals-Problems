function solve(input) {
    const mirrorWords = [];
    const wordPairs = input
        .shift()
        .match(/([@#])[A-Za-z]{3,}\1{2}[A-Za-z]{3,}\1/g)

    if (wordPairs) {
        wordPairs.forEach((p) => {
            let [w1, w2] = p.match(/\w+/g);
            if (w2.split('').reverse().join('') === w1) {
                mirrorWords.push(w1 + ' <=> ' + w2);
            }
        });

        console.log(`${wordPairs.length} word pairs found!`)

        if (mirrorWords.length > 0) {
            console.log(`The mirror words are:\n${mirrorWords.join(', ')}`);
        } else {
            console.log('No mirror words!')
        }
    } else {
        console.log('No word pairs found!')
        console.log('No mirror words!')
    }
}
solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);