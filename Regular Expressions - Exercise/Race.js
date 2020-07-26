function solve(input) {
    const racers = {};
    
    input
    .shift()
    .split(', ')
    .forEach((x) => racers[x] = 0);
    
    let line = input.shift();

    while (line !== 'end of race') {
        let racer = line.match(/[a-zA-Z]/g).join('');
        let distance = line.match(/\d/g).reduce((a, b) => a + Number(b), 0);
        
        if (racers.hasOwnProperty(racer)) {
            racers[racer] += distance
        }

        line = input.shift()
    }

    const racersSorted = Object
    .entries(racers)
    .sort((a, b) => b[1] - a[1])

    console.log(`1st place: ${racersSorted[0][0]}\n2nd place: ${racersSorted[1][0]}\n3rd place: ${racersSorted[2][0]}`);
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])