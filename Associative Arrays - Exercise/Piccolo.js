function solve(input) {
    const parkingLot = new Set();

    input.forEach(line => {
        const tokens = line.split(', ');
        const action = tokens[0];
        const car = tokens[1];

        if (action === 'IN') {
            parkingLot.add(car);
        } else if (action === 'OUT') {
            parkingLot.delete(car);
        }
    });

    let sortedLot = Array.from(parkingLot.values()).sort((a, b) => a.localeCompare(b));
    sortedLot.forEach(carNumber => console.log(carNumber))
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])