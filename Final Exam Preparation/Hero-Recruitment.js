function solve(input) {
    const heroes = {};
    input.slice(0, input.indexOf('End')).forEach((line) => {
        let tokens = line.split(' ') 
        if (tokens[0] === 'Enroll') {
            if (!heroes.hasOwnProperty(tokens[1])) {
                heroes[tokens[1]] = [];
            } else {
                console.log(`${tokens[1]} is already enrolled.`);
            }

        } else if (tokens[0] === 'Learn') {
            let [name, spell] = tokens.slice(1);
            if (heroes.hasOwnProperty(name)) {
                if (!heroes[name].includes(spell)) {
                    heroes[name].push(spell);
                } else {
                    console.log(`${name} has already learnt ${spell}.`);
                }
            } else {
                console.log(`${name} doesn't exist.`)
            }
            
        } else if (tokens[0] === 'Unlearn') {
            let [name, spell] = tokens.slice(1);
            if (heroes.hasOwnProperty(name)) {
                if (heroes[name].includes(spell)) {
                    heroes[name].splice(heroes[name].indexOf(spell), 1);
                } else {
                    console.log(`${name} doesn't know ${spell}.`);
                }
            } else {
                console.log(`${name} doesn't exist.`)
            }
        }
    })
    
    console.log('Heroes:');
    Object.entries(heroes)
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    .forEach((h) => console.log(`== ${h[0]}: ${h[1].join(', ')}`));
}

solve([
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stefan ItShouldWork',
    'Unlearn Stefan NotFound',
    'End'
  ])