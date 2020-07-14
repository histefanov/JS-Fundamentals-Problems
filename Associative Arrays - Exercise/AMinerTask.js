function mining(input) {
    const resources = {};

    for (let i = 0; i < input.length - 1; i += 2) {
        if (!resources.hasOwnProperty(input[i])) {
            resources[input[i]] = Number(input[i + 1]);
        } else {
            resources[input[i]] += Number(input[i + 1]);
        }
    }
    
    for (const res in resources) {
        console.log(`${res} -> ${resources[res]}`);
    }
}

mining([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])