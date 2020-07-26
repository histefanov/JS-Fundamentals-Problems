function solve(input) {
    const regExp = /([$^#@])\1{5,9}/;
    const tickets = input
    .shift()
    .replace(/ /g, '')
    .split(',');   

    tickets.forEach((t) => {
        if (t.length === 20) {
            let leftMatch = t.substring(0, 10).match(regExp);
            let rightMatch = t.substring(10).match(regExp);

            if (leftMatch && rightMatch && leftMatch[0][0] === rightMatch[0][0]) {
                if (Math.min(leftMatch[0].length, rightMatch[0].length) < 10) {
                    console.log(`ticket "${t}" - ${Math.min(leftMatch[0].length, rightMatch[0].length)}${leftMatch[0][0]}`)
                } else {
                    console.log(`ticket "${t}" - ${leftMatch[0].length}${leftMatch[0][0]} Jackpot!`)
                }
            } else {
                console.log(`ticket "${t}" - no match`);
            }
        } else {
            console.log('invalid ticket')
        }
    });
}

solve(['$$$$$$$$$$$$$$$$$$$$,aabb,th@@@@@@eemo@@@@@@ey,^^$$##cash^#$$$$$%^^'])