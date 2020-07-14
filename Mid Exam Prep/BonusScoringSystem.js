function solve(input) {
    const info = input.slice(0);
    let students = Number(info.shift());
    let lectures = Number(info.shift());
    let additionalBonus = Number(info.shift());
    let attendances = info.map(Number)
        .sort((a, b) => b - a);

    let bonusResults = attendances.map(x => Math.ceil(x / lectures * (5 + additionalBonus)));

    if (students != 0) {
        console.log(`Max Bonus: ${bonusResults[0]}.`);
        console.log(`The student has attended ${attendances[0]} lectures.`);
    } else {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
    }
}

solve([
    '5', '0', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])