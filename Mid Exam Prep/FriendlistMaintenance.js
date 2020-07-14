function friendlist(input) {
    const list = input.shift().split(', ');
    let action = input.shift();

    while (action !== 'Report') {
        const command = action.split(' ')[0];

        if (command == 'Blacklist') {
            const name = action.split(' ')[1];
            if (list.includes(name)) {
                list.splice(list.indexOf(name), 1, 'Blacklisted');
                console.log(`${name} was blacklisted.`)
            } else {
                console.log(`${name} was not found.`)
            }
        } else if (command == 'Error') {
            const index = action.split(' ')[1];
            const name = list[index];
            if (name !== 'Blacklisted' && name !== 'Lost') {
                list.splice(index, 1, 'Lost');
                console.log(`${name} was lost due to an error.`)
            }
        } else if (command == 'Change') {
            const index = action.split(' ')[1];
            const newName = action.split(' ')[2];
            const currentName = list[index];
            if (currentName !== undefined) {
                list.splice(index, 1, newName);
                console.log(`${currentName} changed his username to ${newName}.`)
            }
        }

        action = input.shift();
    }

    const blacklistedNamesCount = list.filter(x => x === 'Blacklisted').length;
    const lostNamesCount = list.filter(x => x === 'Lost').length;

    console.log(`Blacklisted names: ${blacklistedNamesCount}`);
    console.log(`Lost names: ${lostNamesCount}`);
    console.log(list.join(' '));
}

friendlist([
    'Mike, John, Eddie',
    'Blacklist Mike',
    'Error 0',
    'Error 1',
    'Change 2 Mike123',
    'Report'
]
)