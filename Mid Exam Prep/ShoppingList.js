function shoppingList(input) {
    const products = input.shift().split('!');
    let action = input.shift();

    while (action !== 'Go Shopping!') {
        const command = action.split(' ')[0];
        const item = action.split(' ')[1];

        switch (command) {
            case 'Urgent':
                if (!products.includes(item)) {
                    products.unshift(item);
                }
                break;

            case 'Unnecessary':
                if (products.includes(item)) {
                    products.splice(products.indexOf(item), 1);
                }
                break;

            case 'Correct':
                const newItem = action.split(' ')[2];
                if (products.includes(item)) {
                    products.splice(products.indexOf(item), 1, newItem);
                }
                break;

            case 'Rearrange':
                if (products.includes(item)) {
                    products.splice(products.indexOf(item), 1);
                    products.push(item);
                }
                break;
        }

        action = input.shift();
    }
    console.log(products.join(', '));
}

shoppingList(['Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'])