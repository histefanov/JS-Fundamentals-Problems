function solve(input) {
    const n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let info = input[i].match(/\|([A-Z]{4,})\|:#([A-Za-z]+ [A-Za-z]+)#/);
        if (info) {
            let [name, title] = info.slice(1, 3);
            console.log(`${name}, The ${title}\n>> Strength: ${name.length}\n>> Armour: ${title.length}`);
        } else {
            console.log('Access denied!')
        }
    }
}

solve([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
])