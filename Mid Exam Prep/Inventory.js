function inventory(arr) {
    const input = arr.slice();
    const items = input.shift().split(', ');
    let action = input.shift();

    while (action !== 'Craft!') {
        const command = action.split(' - ')[0];
        const item = action.split(' - ')[1];

        switch (command) {
            case 'Collect':
                if (!items.includes(item)) {
                    items.push(item);
                }
                break;

            case 'Drop':
                if (items.includes(item)) {
                    items.splice(items.indexOf(item), 1);
                }
                break;

            case 'Combine Items':
                const oldItem = item.split(':')[0];
                const newItem = item.split(':')[1];

                if (items.includes(oldItem)) {
                    items.splice((items.indexOf(oldItem) + 1), 0, newItem);
                }
                break;

            case 'Renew':
                if (items.includes(item)) {        
                    items.push(items.splice(items.indexOf(item), 1));
                }
                break;
        }

        action = input.shift();
    }

    console.log(items.join(', '))
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])