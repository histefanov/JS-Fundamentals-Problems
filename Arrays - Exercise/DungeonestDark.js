function dungeon(quest) {
    let rooms = quest[0].split('|');
    let hp = 100;
    let coins = 0;
    for (let i = 0; i < rooms.length; i++) {
        let currentRoom = rooms[i].split(' ');
        if (currentRoom[0] == 'potion') {
            if (hp + Number(currentRoom[1]) <= 100) {
                console.log(`You healed for ${currentRoom[1]} hp.`);
                hp += Number(currentRoom[1]);
                console.log(`Current health: ${hp} hp.`)
            } else {
                console.log(`You healed for ${100 - hp} hp.`);
                hp = 100;
                console.log(`Current health: ${hp} hp.`)
            }
        } else if (currentRoom[0] == 'chest') {
            console.log(`You found ${currentRoom[1]} coins.`);
            coins += Number(currentRoom[1]);
        } else {
            hp -= Number(currentRoom[1]);
            if (hp > 0) {
                console.log(`You slayed ${currentRoom[0]}.`);
            } else {
                console.log(`You died! Killed by ${currentRoom[0]}.`);
                console.log(`Best room: ${i + 1}`)
                return;
            }
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${hp}`);
}
dungeon(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);