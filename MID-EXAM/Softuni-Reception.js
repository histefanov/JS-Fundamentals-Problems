function solve (input) {
    let questionCount = Number(input.pop());
    const workCapacity = input.map(Number).reduce((a, b) => a + b);
    let hoursNeeded = 0;

    while (questionCount > 0) {
        hoursNeeded++;

        if (hoursNeeded % 4 === 0) {
            hoursNeeded++;
        }

        questionCount -= workCapacity;
    }

    console.log(`Time needed: ${hoursNeeded}h.`);
}

solve([ '3', '2', '5', '40' ])