function disneyland(input) {
    const price = Number(input[0]);
    const months = Number(input[1]);
    let savedMoney = 0;

    for (let i = 1; i <= months; i++) {
        if (i % 2 !== 0 && i !== 1) {
            savedMoney *= 0.84;
        }
        if (i % 4 === 0) {
            savedMoney *= 1.25;
        }
        savedMoney += price * 0.25;
    }

    if (savedMoney >= price) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(savedMoney - price).toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${(price - savedMoney).toFixed(2)}lv. more.`);
    }
}

disneyland(['3265', '3'])