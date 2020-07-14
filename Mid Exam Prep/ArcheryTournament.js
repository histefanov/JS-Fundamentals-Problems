function tournament(input) {
    let targets = input.shift()
        .split('|')
        .map(Number);
    let action = input.shift();
    let points = 0;

    while (action !== 'Game over') {
        const actionArr = action.split('@');
        const command = actionArr[0];

        if (command == 'Shoot Left' && targets[Number(actionArr[1])] !== undefined) {
            let index = Number(actionArr[1]);
            const length = Number(actionArr[2]);
            target = null;

            if (index - length < 0) {
                target = Math.abs(targets.length + (index - length) % targets.length)
            } else {
                target = index - length;
            };

            points += Math.min(targets[target], 5);
            targets[target] = Math.max((targets[target] - 5), 0);

        } else if (command == 'Shoot Right' && targets[Number(actionArr[1])] !== undefined) {
            let index = Number(actionArr[1]);
            const length = Number(actionArr[2]);
            const target = (index + length) % targets.length;

            points += Math.min(targets[target], 5);
            targets[target] = Math.max((targets[target] - 5), 0);

        } else if (command == 'Reverse') {
            targets = targets.sort((a, b) => targets.indexOf(b) - targets.indexOf(a));
        }

        action = input.shift();
    }
    console.log(targets.join(' - '));
    console.log(`Iskren finished the archery tournament with ${points} points!`)
}

tournament([
    '20|30|40|50|60',
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over',
    ''
  ]
  
)