function partyManager(input) {
    let guests = [];

    for (const action of input) {
        let command = action.split(' is ')[1];
        let name = action.split(' is ')[0];

        if (command == 'going!') {
            if (guests.filter(a => a == name).length == 0) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }

        } else if (action.split(' is ')[1] == 'not going!') {
            if (guests.filter(a => a == name).length > 0) {
                guests.splice(guests.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    return guests.join('\n');    
}
partyManager(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])