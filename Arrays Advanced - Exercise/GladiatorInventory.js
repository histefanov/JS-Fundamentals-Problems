function inventoryManager(input) {
    let inventory = input.shift().split(' ');

    while (input.length > 0) {
        let action = input.shift().split(' ');
        let command = action.shift();
        let item = action.shift();

        switch (command) {
            case 'Buy':
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case 'Trash':
                if (inventory.includes(item)) {
                    inventory.splice(inventory.indexOf(item), 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(item)) {
                    inventory.splice(inventory.indexOf(item), 1);
                    inventory.push(item);
                }
                break;
            case 'Upgrade':
                let upgradable = item.split('-')[0];
                let upgrade = item.split('-')[1];

                if (inventory.includes(upgradable)) {
                    inventory.splice(inventory.indexOf(upgradable) + 1, 0, `${upgradable}:${upgrade}`);
                }
                break;
        }
    }
    return inventory.join(' ');
}
inventoryManager(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])