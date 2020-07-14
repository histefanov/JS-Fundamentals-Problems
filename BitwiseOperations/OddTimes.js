function oddTimes(input) {
    let numbers = input.split(' ').map(Number);
    let counter = 1;

    for (let i = 0; i < numbers.length; i++) {
        let x = numbers[i]
        for (let j = i + 1; j < numbers.length; j++) {
            let y = numbers[j];
            let result = x ^ y;
            if (result == 0) {
                counter++;
            }
        }
        if (counter % 2 != 0) {
            console.log(numbers[i]);
            break;
        } else {
            counter = 1;
        }
    }
}
oddTimes('5 7 2 7 5 2 5')