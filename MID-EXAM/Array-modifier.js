function solve(input) {
    let arr = input.shift().split(' ').map(Number);
    let action = input.shift();
    
    while (action !== 'end') {
        let actionSplit = action.split(' ');
        let command = actionSplit.shift();

        if (command === 'swap') {
            let index1 = Number(actionSplit.shift());
            let index2 = Number(actionSplit.shift());
            let num1 = arr[index1];
            let num2 = arr[index2];

            arr.splice(index1, 1, num2);
            arr.splice(index2, 1, num1);

        } else if (command === 'multiply') {
            let index1 = Number(actionSplit.shift());
            let index2 = Number(actionSplit.shift());
            arr[index1] *= arr[index2];

        } else if (command === 'decrease') {
            arr = arr.map(x => x -= 1);
        }

        action = input.shift();
    }

    console.log(arr.join(', '));
}

solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
)