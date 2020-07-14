function mining(product) {
    let profitInLeva = 0;
    let flag = Boolean(true);
    let dayOfFirstBitcoin = 0;
    for (let i = 0; i < product.length; i++) {
        if ((i + 1) % 3 == 0) {
            profitInLeva += product[i] * 0.7 * 67.51;
        } else {
            profitInLeva += product[i] * 67.51;
        }
        if (profitInLeva >= 11949.16 && flag) {
            dayOfFirstBitcoin = i + 1;
            flag = false;
        }
    }
    let boughtBitcoins = Math.floor(profitInLeva / 11949.16);
    let moneyLeft = profitInLeva % 11949.16;
    console.log(`Bought bitcoins: ${boughtBitcoins}`)
    if (flag == false) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}