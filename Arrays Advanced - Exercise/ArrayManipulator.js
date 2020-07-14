function manipulator(arr1, arr2) {
    let numbers = arr1.slice(0);
    let commands = arr2.slice(0);

    while (commands.length > 0) {
        let input = commands.shift().split(' ');
        let command = input.shift();
        let index = 0;
        let element = 0;

        switch (command) {
            case 'add':
                index = input.shift();
                element = input.shift();
                numbers.splice(index, 0, Number(element));
                break;

            case 'addMany':
                index = input.shift();
                for (const element of input) {
                    numbers.splice(index, 0, Number(element));
                    index++;
                }
                break;

            case 'contains':
                element = input.shift();
                index = numbers.indexOf(Number(element));
                console.log(index);
                break;

            case 'remove':
                index = input.shift();
                numbers.splice(index, 1);
                break;

            case 'shift':
                let positions = input.shift();
                for (let i = 0; i < positions; i++) {
                    numbers.push(numbers.shift());
                }
                break;

            case 'sumPairs':
                let summed = [];
                for (let i = 0; i < numbers.length; i += 2) {
                    if (i != numbers.length - 1) {
                        summed.push(numbers[i] + numbers[i + 1]);
                    } else {
                        summed.push(numbers[i]);
                    }
                }
                numbers = summed;
                break;

            case 'print':
                let result = numbers.join(', ');
                console.log(`[ ${result} ]`);

                break;
        }
    }
}
manipulator([1, 2, 3, 4],
    ["add 1 4", "addMany 3 1 2", "sumPairs", "print"])