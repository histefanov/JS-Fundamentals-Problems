function order(item, quantity) {
    let price = 0;
    switch (item) {
        case 'coffee':
            price = 1.50;
            break;
        case 'water':
            price = 1.00;
            break;
        case 'coke':
            price = 1.40;
            break;
        case 'snacks':
            price = 2.00;
            break;
    }
    let total = quantity => quantity * price;
    return total(quantity).toFixed(2);
}
order ('water', 5)