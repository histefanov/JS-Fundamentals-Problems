function ladybugs(input) {
    let field = [];
    let fieldSize = input[0];
    for (let i = 0; i < fieldSize; i++) {
        if (input[1].split(' ').includes(i.toString())) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }
    for (let index = 2; index < input.length; index++) {
        let action = input[index].split(' ');
        let ladybugIndex = Number(action[0]);
        let direction = action[1];
        let flyLength = Number(action[2]);
        let hasLanded = false;
        if (field[ladybugIndex] == 1) {
            field[ladybugIndex] = 0;
            while (!hasLanded) {
                if (direction == 'right') {
                    ladybugIndex += flyLength;
                } else if (direction == 'left') {
                    ladybugIndex -= flyLength;
                }
                if (field[ladybugIndex] == 1) {
                    continue;
                } else if (field[ladybugIndex] == 0) {
                    field[ladybugIndex] = 1;
                    hasLanded = true;
                } else {
                    hasLanded = true;
                }
            }
        }
    }
    console.log(field.join(' '));
}
ladybugs([ 5, '3',
'3 left 2',
'1 left -2']);