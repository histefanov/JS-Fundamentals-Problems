function solve(input) {
    const words = {};
    const wordsToCheck = input.shift().split(' ');
    wordsToCheck.forEach(word => words[word] = 0);

    input.forEach(word => {
        if (wordsToCheck.includes(word)) {
            words[word]++;
        }
    })

    const sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);
    sorted.forEach(x => console.log(`${x[0]} - ${x[1]}`));
}

solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])