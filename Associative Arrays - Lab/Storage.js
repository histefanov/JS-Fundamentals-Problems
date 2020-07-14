function solve(input) {
    let storage = new Map();

    for (const product of input) {
        let [item, quantity] = product.split(' ');

        if (storage.has(item)) {
            let currentQuantity = storage.get(item);
            storage.set(item, Number(currentQuantity) + Number(quantity));
        } else {
            storage.set(item, Number(quantity));
        }
    }

    Array.from(storage.entries()).forEach(kvp => {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    })
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])