function solve(input) {
    const list = {};
    const neighborhoods = input.shift().split(', ');
    neighborhoods.forEach(x => list[x] = []);

    for (const el of input) {
        const tokens = el.split(' - ');
        if (list[tokens[0]] !== undefined) {
            list[tokens[0]].push(tokens[1]);
        }
    }

    const sortedByCount = Object.entries(list).sort((a, b) => b[1].length - a[1].length);
    
    for (const neighborhood of sortedByCount) {
        console.log(`${neighborhood[0]}: ${neighborhood[1].length} `);
        neighborhood[1].forEach(person => console.log(`--${person}`));
    }  
}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'])