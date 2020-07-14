function wizardPoker(input) {
    const deck = input.shift().split(':');
    const newDeck = [];
    let action = input.shift().split(' ');
    let command = action[0];

    while (command !== "Ready") {
        if (command === 'Add') {
            let card = action[1];
            if (deck.includes(card)) {
                newDeck.push(card);
            } else {
                console.log('Card not found.')
            }

        } else if (command === 'Insert') {
            let card = action[1];
            let index = Number(action[2]);
            if (deck.includes(card) && newDeck[index] !== undefined) {
                newDeck.splice(index, 0, card);
            } else {
                console.log('Error!')
            }

        } else if (command === 'Remove') {
            let card = action[1];
            if (newDeck.includes(card)) {
                newDeck.splice(newDeck.indexOf(card), 1);
            } else {
                console.log('Card not found.')
            }

        } else if (command === 'Swap') {
            let card1 = action[1];
            let card2 = action[2];
            let index1 = newDeck.indexOf(card1);
            let index2 = newDeck.indexOf(card2);
            newDeck[index1] = card2;
            newDeck[index2] = card1;
        } else if (command === 'Shuffle') {
            newDeck.reverse();
        }
        action = input.shift().split(' ');
        command = action[0]
    }
    console.log(newDeck.join(' '));
}

wizardPoker([
    'Terca:Dvesta:FlushRoyale:Kent-kupe',
    'Add Terca',
    'Add Dvesta',
    'Add FlushRoyale',
    'Add Kent-kupe',
    'Ready'
])