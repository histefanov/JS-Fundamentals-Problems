function solve(input) {
    let gladiators = {};
    let line = input.shift();

    while (line != 'Ave Cesar') {
        if (line.split(' ').includes('->')) {
            let [name, technique, skill] = line.split(' -> ');
            skill = Number(skill);

            if (!gladiators.hasOwnProperty(name)) {
                gladiators[name] = { [technique]: skill };
            } else {
                if (!gladiators[name].hasOwnProperty(technique)) {
                    gladiators[name][technique] = skill;
                } else if (gladiators[name][technique] < skill) {
                    gladiators[name][technique] = skill;
                }
            }

        } else {
            let [name1, name2] = line.split(' vs ');

            if (gladiators[name1] && gladiators[name2]) {
                let techniques1 = Object.keys(gladiators[name1]);
                let techniques2 = Object.keys(gladiators[name2]);

                if (techniques1.filter(x => techniques2.includes(x)).length > 0) {
                    let totalSkill1 = Object.values(gladiators[name1]).reduce((a, b) => a + b);
                    let totalSkill2 = Object.values(gladiators[name2]).reduce((a, b) => a + b);

                    totalSkill1 > totalSkill2 ? delete gladiators[name2] : delete gladiators[name1];
                }
            }
        }
        line = input.shift();
    }

    let sortedBySkill = Object.entries(gladiators).sort((a, b) => {
        let aSum = Object.values(a[1]).reduce((a, b) => a + b);
        let bSum = Object.values(b[1]).reduce((a, b) => a + b);

        if (bSum - aSum !== 0) {
            return bSum - aSum;
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    for (const kvp of sortedBySkill) {
        let totalSkill = Object.values(gladiators[kvp[0]]).reduce((a, b) => a + b);
        let techniquesSorted = Object.entries(gladiators[kvp[0]]).sort((a, b) => {
            if (b[1] - a[1] !== 0) {
                return b[1] - a[1];
            } else {
                return a[0].localeCompare(b[0]);
            }
        });

        console.log(`${kvp[0]}: ${totalSkill} skill`);
        techniquesSorted.forEach(x => console.log(`- ${x[0]} <!> ${x[1]}`));
    }
}

solve([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ])