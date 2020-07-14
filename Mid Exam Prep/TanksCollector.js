function tanksCollector(input) {
    const collection = input.shift().split(', ');
    const n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        const action = input[i].split(', ');
        const command = action[0];

        if (command === 'Add') {
            const tank = action[1];
            if (!collection.includes(tank)) {
                collection.push(tank);
                console.log("Tank successfully bought");
            } else {
                console.log("Tank is already bought");
            }

        } else if (command === 'Remove') {
            const tank = action[1];
            if (collection.includes(tank)) {
                collection.splice(collection.indexOf(tank), 1);
                console.log("Tank successfully sold");
            } else {
                console.log("Tank not found");
            }

        } else if (command === 'Remove At') {
            const index = Number(action[1]);

            if (collection[index] !== undefined) {
                collection.splice(index, 1);
                console.log("Tank successfully sold");
            } else {
                console.log("Index out of range");
            }

        } else if (command === 'Insert') {
            const index = Number(action[1]);
            const tank = action[2];
            if (collection[index] !== undefined && !collection.includes(tank)) {
                collection.splice(index, 0, tank);
                console.log("Tank successfully bought");
            } else if (collection[index] !== undefined) {
                console.log("Tank is already bought");
            } else {
                console.log("Index out of range");
            }
        }
    }
    console.log(collection.join(", "));
}

tanksCollector([
    'T 34, T 34 B, T92, AMX 13 57',
    '4',
    'Add, T 34',
    'Remove, AMX CDC',
    'Insert, 10, M60',
    'Remove At, 1'
]
)