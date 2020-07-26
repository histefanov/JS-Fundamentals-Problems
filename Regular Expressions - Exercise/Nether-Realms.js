function solve(input) {
    const demonBook = [];
    let demons = input[0].replace(/ /g, '').split(',');

    for (const demon of demons) {
        let hp, dmg;
        let hpChars = demon.match(/[^\d+\-*/\.]/g);
        let dmgChars = demon.match(/[+\-]?\d+\.?\d*|[*/]/g);
        let slashesAndStars = demon.match(/[*/]/g);

        if (hpChars) {
            hp = hpChars.reduce((a, b) => a + b.charCodeAt(), 0);
        } else {
            hp = 0;
        }

        if (dmgChars) {
            dmg = dmgChars.reduce((a, b) => Number(b) ? a + Number(b) : a, 0)
        } else {
            dmg = 0;
        }
            
        if (slashesAndStars) {
            slashesAndStars.forEach((c) => c === '*' ? dmg *= 2 : dmg /= 2);
        }

        demonBook.push({
            name: demon,
            hp: hp,
            dmg: dmg
        });
    }

    demonBook
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((d) => console.log(`${d.name} - ${d.hp} health, ${d.dmg.toFixed(2)} damage`))
}

solve([ 'M3ph1st0**//*-25, Azazel,Gosho10*-10/25*-5.5,    Pesho12p-24*//' ])