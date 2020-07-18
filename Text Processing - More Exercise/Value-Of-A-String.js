function solve(input) {
    let sum = 0;
    let str = input.shift();
    let casing = input.shift();

    if (casing === 'UPPERCASE') {
        for (const ch of str) {
            if (ch >= 'A' && ch <= 'Z') {
                sum += ch.charCodeAt();
            }
        }
    } else if (casing === 'LOWERCASE') {
        for (const ch of str) {
            if (ch >= 'a' && ch <= 'z') {
                sum += ch.charCodeAt();
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}

solve(['HelloFromMyAwesomePROGRAM',
'LOWERCASE'])