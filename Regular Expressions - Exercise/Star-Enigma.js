function decrypter(input) {
    const regex = /[^@\-!:>]*@([A-Za-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!([AD])![^@\-!:>]*->\d+[^@\-!:>]*/;
    const messageCount = input.shift();
    let attackedPlanets = [];
    let destroyedPlanets = [];
    let key;

    for (let i = 0; i < messageCount; i++) {
        if (/[star]/gi.test(input[i])) {
            key = input[i].match(/[star]/gi).length;
        } else {
            key = 0;
        }

        let message = input[i]
            .split('')
            .map((x) => String.fromCharCode(x.charCodeAt(0) - key))
            .join('')
            .match(regex);

        if (message) {
            message[2] === 'A' ? attackedPlanets.push(message) : destroyedPlanets.push(message);
        }
    }

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets
        .sort((a, b) => a[1].localeCompare(b[1]))
        .forEach((x) => console.log(`-> ${x[1]}`));

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets
        .sort((a, b) => a[1].localeCompare(b[1]))
        .forEach((x) => console.log(`-> ${x[1]}`));
}

decrypter([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
])