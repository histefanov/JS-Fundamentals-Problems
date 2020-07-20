function solve(input) {
    let getResource = (str) => {
        let startIndex = str.indexOf('&');
        let endIndex = str.indexOf('&', startIndex + 1);
        return str.substring(startIndex + 1, endIndex);
    }

    let getCoordinates = (str) => {
        let startIndex = str.indexOf('<');
        let endIndex = str.indexOf('>');
        return str.substring(startIndex + 1, endIndex);
    }

    const key = input
    .shift()
    .split(' ')
    .map(Number);
    
    let msg = input.shift();

    while (msg !== 'find') {
        const msgArr = msg.split('')
        let keyIndex = 0;

        for (const i in msgArr) {
            let replacement = String.fromCharCode(msgArr[i].charCodeAt() - key[keyIndex % key.length]);
            msgArr[i] = replacement;
            keyIndex++;
        }
        msg = msgArr.join('');
        console.log(`Found ${getResource(msg)} at ${getCoordinates(msg)}`);
           
        msg = input.shift();
    }
}

solve([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find'
])