function solve(input) {
    let totalIncome = 0;
    let line = input.shift();

    while (line !== 'end of shift') {
        let name = line.match(/(?<=%)[A-Z][a-z]+(?=%)/);
        let product = line.match(/(?<=<)\w+(?=>)/);
        let qty = line.match(/(?<=\|)\d+(?=\|)/);
        let price = line.match(/\d+\.?\d*(?=\$)/);

        if (name && product && qty && price) {
            let totalPrice = Number(qty[0]) * Number(price[0]);
            console.log(`${name[0]}: ${product[0]} - ${totalPrice.toFixed(2)}`)
            totalIncome += totalPrice;
        }
        line = input.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
  ])