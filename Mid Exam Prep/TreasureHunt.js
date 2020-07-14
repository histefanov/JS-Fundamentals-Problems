function treasureHunt(input) {
    const chest = input.shift().split('|');
    let action = input.shift().split(' ');
    let command = action.shift();

    while (command !== 'Yohoho!') {
        if (command === 'Loot') {
            action.forEach(item => {
                if (!chest.includes(item)) {
                    chest.unshift(item);
                }
            });
        } else if (command === 'Drop') {
            const index = Number(action.shift());
            if (chest[index] !== undefined) {
                chest.push(chest.splice(index, 1));
            }
        } else if (command === 'Steal') {
            const count = Number(action.shift());
            const stolenItems = [];

            for (let i = 0; i < count; i++) {
                if (chest.length > 0) {
                    stolenItems.unshift(chest.pop());
                }
            }
            console.log(stolenItems.join(', '));
        }

        action = input.shift().split(' ');
        command = action.shift();
    }

    let treasureItemsLength = 0;
    chest.forEach(item => treasureItemsLength += item.length);
    const averageGain = (treasureItemsLength / chest.length).toFixed(2);

    if (chest.length > 0) {
        console.log(`Average treasure gain: ${averageGain} pirate credits.`)
    } else {
        console.log('Failed treasure hunt.')
    }
}

treasureHunt([
    'Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6',
    'Yohoho!'
]
)