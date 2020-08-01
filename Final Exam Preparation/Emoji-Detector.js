function solve(input) {
    const str = input.shift();
    const coolThreshhold = str.match(/\d/g).reduce((a, b) => a * Number(b));

    const emojis = str.match(/([*]{2}|[:]{2})[A-Z][a-z]{2,}\1/g);
    console.log(`Cool threshold: ${coolThreshhold}`);
    console.log(`${emojis ? emojis.length : 0} emojis found in the text. The cool ones are:`)
    if (emojis) {
        emojis.forEach((e) => {
            let coolness = e.match(/[A-Za-z]/g).reduce((a, b) => a + b.charCodeAt(), 0);
            if (coolness >= coolThreshhold) {
                console.log(e);
            }
        })
    }
}

solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
  ])