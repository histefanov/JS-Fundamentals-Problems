function solve(input) {
    let skill = input.shift();
    input
        .slice(0, input.indexOf('For Azeroth'))
        .forEach(line => {
            if (line === 'GladiatorStance') {
                skill = skill.toUpperCase();
                console.log(skill);
            } else if (line === 'DefensiveStance') {
                skill = skill.toLowerCase();
                console.log(skill);
            } else if (line.includes('Dispel')) {
                let [index, letter] = line.split(' ').slice(1);
                if (skill[Number(index)]) {
                    skill = skill.substring(0, Number(index)) + letter + skill.substring(Number(index) + 1);
                    console.log('Success!');
                } else {
                    console.log('Dispel too weak.');
                }
            } else if (line.includes('Target Change')) {
                let [substrOne, substrTwo] = line.split(' ').slice(2);
                while (skill.includes(substrOne)) {
                    skill = skill.replace(substrOne, substrTwo);
                }
                console.log(skill);
            } else if (line.includes('Target Remove')) {
                let substr = line.split(' ')[2];
                skill = skill.replace(substr, '');
                console.log(skill);
            } else {
                console.log("Command doesn't exist!");
            }
        })
}

solve([
    'fr1c710n',
    'GladiatorStance',
    'Dispel 2 I',
    'Dispel 4 T',
    'Dispel 6 O',
    'Dispel 5 I',
    'Dispel 10 I',
    'Target Change RICTION riction',
    'For Azeroth'
  ]
  )