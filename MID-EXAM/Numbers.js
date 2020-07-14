function solve(input) {
    let nums = input.split(' ').map(Number);
    let average = nums.reduce((a, b) => a + b) / nums.length;
    let biggerThanAverage = nums.filter(x => x > average).sort((a, b) => b - a);
    
    if (biggerThanAverage.length < 1) {
        console.log('No');
        return;
    }

    let topFive = [];

    for (let i = 0; i < 5; i++) {
        let currentNum = biggerThanAverage.shift();
        if (currentNum !== undefined) {
            topFive.push(currentNum);
        } else {
            break;
        }
    }
    console.log(topFive.join(' '));
}

solve('1')