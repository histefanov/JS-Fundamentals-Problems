function bombNumbers(arr, bomb) {
    let numbers = arr.slice(0);
    let bombNumber = bomb[0];
    let power = bomb[1];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == bombNumber) {
            for (let j = i - power; j <= i + power; j++) {
                if (j >= 0 && j < numbers.length) {
                    numbers[j] = 0;
                }
            }
        }
    }
    
    numbers = numbers.filter(a => a != bombNumber);

    for (const number of numbers) {
        sum += number;
    }

    console.log(sum);
}
bombNumbers([7, 1, 1, 1, 1, 7, 7, 7, 1, 1, 1, 7],
    [7, 2])