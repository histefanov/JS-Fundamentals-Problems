function solve(input) {
    const str = input.shift();
    const chars = new Set([...str.split('')]);

    for (const ch of chars) {
        let indexes = [];
        
        for (let i = 0; i < str.length; i++) {
            if (str[i] === ch) {
                indexes.push(i)
            }
        }
        console.log(`${ch}:${indexes.join('/')}`);
    }
}

solve(['avjavamsdmcalsdm'])