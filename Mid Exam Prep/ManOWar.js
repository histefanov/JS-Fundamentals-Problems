function manOWar(input) {
    const pirateShip = input.shift().split('>').map(Number);
    const warShip = input.shift().split('>').map(Number);
    const maxHpCapacity = Number(input.shift());
    let action = input.shift().split(' ');
    let command = action.shift();

    while (command !== 'Retire') {
        if (command === 'Fire') {
            const index = Number(action.shift());
            const damage = Number(action.shift());

            if (warShip[index] !== undefined) {
                warShip[index] -= damage;
                if (warShip[index] <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    return;
                }
            }

        } else if (command === 'Defend') {
            const startIndex = Number(action.shift());
            const endIndex = Number(action.shift());
            const damage = Number(action.shift());

            if (pirateShip[startIndex] !== undefined && pirateShip[endIndex] !== undefined) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;
                    if (pirateShip[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    }
                }
            }

        } else if (command === 'Repair') {
            const index = Number(action.shift());
            const hp = Number(action.shift());

            if (pirateShip[index] !== undefined) {
                pirateShip[index] = Math.min((pirateShip[index] + hp), maxHpCapacity);
            }

        } else if (command === 'Status') {
            console.log(`${pirateShip.filter(section => section < 0.2 * maxHpCapacity).length} sections need repair.`);
        }

        action = input.shift().split(' ');
        command = action.shift();
    }

    console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b)}`);
    console.log(`Warship status: ${warShip.reduce((a, b) => a + b)}`);
}

manOWar([
    '12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire'
  ]
  )