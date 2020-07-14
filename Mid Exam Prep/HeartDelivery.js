function heartDelivery(input) {
    const neighbourhood = input.shift().split('@').map(Number);
    let action = input.shift();
    let cupidPos = 0;

    while (action !== 'Love!') {
        const jumpLen = Number(action.split(' ')[1]);
        cupidPos += jumpLen;

        if (neighbourhood[cupidPos] !== undefined) {
            neighbourhood[cupidPos] -= 2;
        } else {
            cupidPos = 0;
            neighbourhood[cupidPos] -= 2;
        }

        if (neighbourhood[cupidPos] === 0) {
            console.log(`Place ${cupidPos} has Valentine's day.`)
        } else if (neighbourhood[cupidPos] < 0) {
            console.log(`Place ${cupidPos} already had Valentine's day.`)
        }

        action = input.shift();
    }

    console.log(`Cupid's last position was ${cupidPos}.`)

    const failedHouses = neighbourhood.filter(x => x > 0).length;
    if (failedHouses === 0) {
        console.log('Mission was successful.')
    } else {
        console.log(`Cupid has failed ${failedHouses} places.`)
    }
}

heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!'])