function solve(input) {
    const regex = /^\>{2}(?<item>\w+)\<{2}(?<price>\d+\.?\d*)!(?<quantity>\d+)/;
    let totalSum = 0;
    let itemsBought = [];
    let line = input.shift();
    
    while (line !== 'Purchase') {
        let currentItem = line.match(regex);
        if (currentItem) {
            itemsBought.push(currentItem.groups.item);
            totalSum += Number(currentItem.groups.price) * Number(currentItem.groups.quantity);
        }
        line = input.shift();
    }

    console.log('Bought furniture:');
    itemsBought.forEach((x) => console.log(x))
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

solve(['>>Sofa<<312.23!3', '>>TV<<300.431431!5', '>Invalid<<!5', 'Purchase'])