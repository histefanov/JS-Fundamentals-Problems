function solve(input) {
    const n = Number(input.shift());
    const party = {};
    for (let i = 0; i < n; i++) {
        let [hero, hp, mp] = input[i].split(' ');
        party[hero] = {
            hp: Number(hp),
            mp: Number(mp)
        }
    }

    let command = input.shift();
    let heroName, mpNeeded, spell, attacker, mpAmount, hpAmount, dmg;
    while (command !== 'End') {
        let tokens = command.split(' - ');
        switch (tokens[0]) {
            case 'CastSpell':
                [heroName, mpNeeded, spell] = tokens.slice(1);

                if (party[heroName]['mp'] >= Number(mpNeeded)) {
                    party[heroName]['mp'] -= Number(mpNeeded);
                    console.log(`${heroName} has successfully cast ${spell} and now has ${party[heroName]['mp']} MP!`)
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spell}!`)
                }
                break;

            case 'TakeDamage':
                [heroName, dmg, attacker] = tokens.slice(1);

                party[heroName]['hp'] -= Number(dmg);

                if (party[heroName]['hp'] > 0) {
                    console.log(`${heroName} was hit for ${dmg} HP by ${attacker} and now has ${party[heroName]['hp']} HP left!`)
                } else {
                    delete party[heroName];
                    console.log(`${heroName} has been killed by ${attacker}!`)
                }
                break;

            case 'Recharge':
                [heroName, mpAmount] = tokens.slice(1);
                console.log(`${heroName} recharged for ${Math.min(Number(mpAmount), 200 - party[heroName]['mp'])} MP!`);
                party[heroName]['mp'] = Math.min(party[heroName]['mp'] + Number(mpAmount), 200);
                break;

            case 'Heal':
                [heroName, hpAmount] = tokens.slice(1);
                console.log(`${heroName} healed for ${Math.min(Number(hpAmount), 100 - party[heroName]['hp'])} HP!`);
                party[heroName]['hp'] = Math.min(party[heroName]['hp'] + Number(hpAmount), 100);
                break;
        }

        command = input.shift();
    }

    Object.entries(party)
    .sort((a, b) => b[1]['hp'] - a[1]['hp'] || a[0].localeCompare(b[0]))
    .forEach((x) => console.log(`${x[0]}\n  HP: ${x[1]['hp']}\n  MP: ${x[1]['mp']}`));
}

solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])