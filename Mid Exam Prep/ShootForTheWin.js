function solve(input) {
    const info = input.slice();
    let targets = info.shift().split(' ').map(Number);
    let command = info.shift();
    let hits = 0;

    while (command !== 'End') {
        const index = Number(command);

        if (targets[index] !== undefined) {
            let targetValue = targets[index];
            hits++;
            targets[index] = -1;

            targets = targets.map((x, ind, arr) => {
                if (ind !== index) {
                    if (x > targetValue) {
                        return x - targetValue;
                    } else if (x !== -1) {
                        return x + targetValue;
                    } else {
                        return x;
                    }
                    
                } else {
                    return x;
                }
            })
        }

        command = info.shift();
    }
    console.log(`Shot targets: ${hits} -> ${targets.join(' ')}`);
}

solve([ '24 50 36 70', '0', '4', '3', '1', 'End' ])