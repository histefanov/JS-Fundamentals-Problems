function counterStrike(input) {
    let energy = Number(input.shift());
    let command = Number(input.shift());
    let battlesWon = 0;

    while (command !== 'End of battle') {
        let distance = Number(command);

        if (energy >= distance) {
            energy -= distance;
            battlesWon++;
        } else {
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
            return;
        }

        if (battlesWon % 3 === 0) {
            energy += battlesWon;
        }

        command = input.shift();
    }

    console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`)
}

counterStrike([
    '100', '10', '10',
    '10',  '1',  '2',
    '3',   '73', '10'
  ]
  
)