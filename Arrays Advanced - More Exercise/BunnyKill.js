function bunnyKill(input) {
    let bombBunnies = input.pop().split(' ');
    let hangar = input.map((a) => a.split(' ').map(Number));
    let snowballDamage = 0;
    let snowballFrags = 0;

    for (const bombBunny of bombBunnies) {
        let yBomb = Number(bombBunny.split(',')[0]);
        let xBomb = Number(bombBunny.split(',')[1]);
        let damage = hangar[yBomb][xBomb];

        if (damage > 0) {
            snowballDamage += damage;
            snowballFrags++;

            for (let y = yBomb - 1; y <= yBomb + 1; y++) {
                for (let x = xBomb - 1; x <= xBomb + 1; x++) {
                    let isReachable = y >= 0 && y < hangar.length && x >= 0 && x < hangar[0].length;

                    if (isReachable) {
                        hangar[y][x] = Math.max((hangar[y][x] - damage), 0);
                    }
                }
            }
        }
    }
    for (const row of hangar) {
        snowballDamage += row.reduce((a, b) => a + b);
        snowballFrags += row.filter((a) => a > 0).length;
    }

    console.log(snowballDamage);
    console.log(snowballFrags);
    console.log(hangar.join('\n'));

}
bunnyKill(['10 10 10 10',
    '10 10 10 10',
    '10 10 1 10',
    '10 10 10 10',
    '0,0 2,2'])