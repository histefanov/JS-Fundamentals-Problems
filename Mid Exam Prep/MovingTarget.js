function movingTarget(input) {
    const targets = input.shift().split(' ').map(Number);
    let action = input.shift().split(' ');

    while (action[0] !== 'End') {
        const command = action[0];
        const index = Number(action[1]);
        const value = Number(action[2]);

        switch (command) {
            case 'Shoot':
                if (targets[index] !== undefined) {
                    targets[index] -= value;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;

            case 'Add':
                if (targets[index] !== undefined) {
                    targets.splice(index, 0, value)
                } else {
                    console.log('Invalid placement!');
                }
                break;

            case 'Strike':
                if (targets[index - value] !== undefined && targets[index + value] !== undefined) {
                    targets.splice((index - value), (value * 2 + 1));
                } else {
                    console.log('Strike missed!');
                }
                break;
        }
        action = input.shift().split(' ');
    }
    
    console.log(targets.join('|'));
}

movingTarget([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End'
  ]
  )