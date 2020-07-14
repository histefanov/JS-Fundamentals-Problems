function muOnline(input) {
    const rooms = input.split('|');
    let hp = 100;
    let bitcoins = 0;
    let roomCounter = 0;

    for (const room of rooms) {
        const obj = room.split(' ')[0];
        const value = Number(room.split(' ')[1]);
        roomCounter++;

        if (obj === 'potion') {
            console.log(`You healed for ${Math.min(value, (100 - hp))} hp.`);

            hp = Math.min((hp + value), 100);
            console.log(`Current health: ${hp} hp.`);

        } else if (obj === 'chest') {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`)

        } else {
            hp -= value;

            if (hp > 0) {
                console.log(`You slayed ${obj}.`)
            } else {
                console.log(`You died! Killed by ${obj}.`);
                console.log(`Best room: ${roomCounter}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${hp}`);
}

muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')