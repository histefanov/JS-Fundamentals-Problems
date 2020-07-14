function score(dice) {
    let nums = dice.slice();
    let totalScore = 0;
    let ones = nums.filter(x => x === 1);
    let twos = nums.filter(x => x === 2);
    let threes = nums.filter(x => x === 3);
    let fours = nums.filter(x => x === 4);
    let fives = nums.filter(x => x === 5);
    let sixes = nums.filter(x => x === 6);

    if (ones.length > 0) {
        if (ones.length >= 3) {
            totalScore += 1000;
            ones.splice(0, 3);
            totalScore += ones.length * 100;
        } else {
            totalScore += ones.length * 100;
        }
    }

    if (fives.length > 0) {
        if (fives.length >= 3) {
            totalScore += 500;
            fives.splice(0, 3);
            totalScore += fives.length * 50;
        } else {
            totalScore += fives.length * 50;
        }
    }

    if (twos.length >= 3) {
        totalScore += 200;
    }

    if (threes.length >= 3) {
        totalScore += 300;
    }
    
    if (fours.length >= 3) {
        totalScore += 400;
    }

    if (sixes.length >= 3) {
        totalScore += 600;
    }

    console.log(totalScore);
}

score([2, 4, 4, 5, 4])