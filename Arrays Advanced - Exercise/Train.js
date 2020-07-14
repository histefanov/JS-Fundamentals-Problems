function trainManager(input) {
    let train = input.shift()
    .split(' ')
    .map(a => Number(a));

    let maxCapacity = Number(input.shift());

    for (const element of input) {
        let command = element.split(' ')[0];
        
        if (command == 'Add') {
            let additionalWagon = Number(element.split(' ')[1]);
            train.push(additionalWagon);
        } else {
            for (let i = 0; i < train.length; i++) {
                if (train[i] + Number(command) <= maxCapacity) {
                    train[i] += Number(command);
                    break;
                }
            }
        }
    }
    return train.join(' ');
}
trainManager(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);

