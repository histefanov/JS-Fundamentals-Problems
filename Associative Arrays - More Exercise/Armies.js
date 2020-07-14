function solveArmies(input) {
    const legion = {};
    input.forEach(str => {
        if (str.includes('arrives')) {
            let leader = str.replace(' arrives', '');
            if (!legion.hasOwnProperty(leader)) {
                legion[leader] = {
                    armies: {},
                    totalCount: 0
                }
            }
        } else if (str.includes(': ')) {
            let [leader, army] = str.split(': ');
            let [name, size] = army.split(', ');

            if (legion.hasOwnProperty(leader)) {
                legion[leader]['armies'][name] = Number(size);
                legion[leader]['totalCount'] += Number(size);
            }
        } else if (str.includes(' + ')) {
            let [name, count] = str.split(' + ');

            for (const l in legion) {
                if (legion[l]['armies'].hasOwnProperty(name)) {
                    legion[l]['armies'][name] += Number(count);
                    legion[l]['totalCount'] += Number(count);
                }
            }
        } else if (str.includes('defeated')) {
            let leader = str.replace(' defeated', '');
            if (legion.hasOwnProperty(leader)) {
                delete legion[leader];
            }
        }
    })

    Object.entries(legion)
    .sort((a, b) => b[1]['totalCount'] - a[1]['totalCount'])
    .forEach(x => {
        console.log(`${x[0]}: ${x[1]['totalCount']}`);
        Object.entries(x[1]['armies'])
        .sort((a, b) => b[1] - a[1])
        .forEach(a => console.log(`>>> ${a[0]} - ${a[1]}`));
    })
}

solveArmies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Brr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeate',
    'Porter: Retix, 3205'
])