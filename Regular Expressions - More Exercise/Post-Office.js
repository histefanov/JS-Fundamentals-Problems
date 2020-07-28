function solve(input) {
    const [partOne, partTwo, partThree] = input.shift().split('|');
    const capLetters = partOne.match(/([#$%*&])(?<capLetters>[A-Z]+)\1/).groups.capLetters;
    const asciiCodes = partTwo.match(/(?<!\d)\d{2}:\d{2}(?!\d)/g);
    const words = partThree.match(/\b[A-Z][^ ]*/g);

    for (const letter of capLetters) {
        for (const code of asciiCodes) {
            var [chCode, len] = code.split(':').map(Number);
            if (letter.charCodeAt() === chCode) {
                break;
            }
        }

        for (const word of words) {
            if (word[0] === String.fromCharCode(chCode) && word.length - 1 === len) {
                console.log(word);
                break;
            }
        }
    }
}

solve([
    'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'
]
)
