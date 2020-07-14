function manipulate(input) {
    let array = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ')[0];
        let value = input[i].split(' ')[1];

        switch (command) {
            case 'Add':
                array.push(value);
                break;
            case 'Remove':
                array = array.filter(a => a != value);
                break;
            case 'RemoveAt':
                array.splice(value, 1);
                break;
            case 'Insert':
                let index = input[i].split(' ')[2];
                array.splice(index, 0, value);
                break;
        }
    }
    return array.join(' ');
}
manipulate(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])