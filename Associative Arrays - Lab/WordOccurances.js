function solve(input) {
    const wordCounter = {};

    for (const word of input) {
        wordCounter[word] ? wordCounter[word]++ : wordCounter[word] = 1;
    }

    const sortedByOccurances = Object.entries(wordCounter).sort((a, b) => b[1] - a[1]);
    sortedByOccurances.forEach(entry => console.log(`${entry[0]} -> ${entry[1]} times`));
}

solve(["Here", "is", "the", "first",
    "sentence", "Here", "is", "another",
    "sentence", "And", "finally", "the",
    "third", "sentence"])