function solve(input) {
    let obj = {};
    let unliked = 0;

    input.slice(0, input.indexOf('Stop')).forEach((line) => {
        let [action, guest, meal] = line.split('-');
        if (action === 'Like') {
            if (!obj.hasOwnProperty(guest)) {
                obj[guest] = [meal];
            } else if (!obj[guest].includes(meal)) {
                obj[guest].push(meal);
            }
        } else if (action === 'Unlike') {
            if (obj.hasOwnProperty(guest)) {
                if (obj[guest].includes(meal)) {
                    obj[guest].splice(obj[guest].indexOf(meal), 1);
                    unliked++;
                    console.log(`${guest} doesn't like the ${meal}.`)
                } else {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                }
            } else {
                console.log(`${guest} is not at the party.`);
            }
        }
    })

    Object.entries(obj)
        .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
        .forEach((x) => console.log(`${x[0]}: ${x[1].join(', ')}`));
    console.log(`Unliked meals: ${unliked}`)
}

solve([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
]
)