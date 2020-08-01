function solve(input) {
    Object.size = function(obj) {
        return Object.keys(obj).length;
    }

    const cities = {};
    let citiesInfo = input.slice(0, input.indexOf('Sail'));
    let events = input.slice(input.indexOf('Sail') + 1, input.indexOf('End'));

    citiesInfo.forEach((line) => {
        let [cityName, pop, gold] = line.split('||');
        if (!cities.hasOwnProperty(cityName)) {
            cities[cityName] = {
                pop: Number(pop),
                gold: Number(gold)
            }
        } else {
            cities[cityName]['pop'] += Number(pop);
            cities[cityName]['gold'] += Number(gold);
        }
    })

    events.forEach((event) => {
        let tokens = event.split('=>');
        
        if (tokens[0] === 'Plunder') {
            let [town, people, gold] = tokens.slice(1);
            cities[town]['pop'] -= Number(people);
            cities[town]['gold'] -= Number(gold);
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)

            if (cities[town]['pop'] < 1 || cities[town]['gold'] < 1) {
                delete cities[town];
                console.log(`${town} has been wiped off the map!`)
            }

        } else if (tokens[0] === 'Prosper') {
            let [town, gold] = tokens.slice(1);
            if (Number(gold) >= 0) {
                cities[town]['gold'] += Number(gold);
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town]['gold']} gold.`)
            } else {
                console.log("Gold added cannot be a negative number!");
            }
        }
    })

    if (Object.size(cities) > 0) {
        console.log(`Ahoy, Captain! There are ${Object.size(cities)} wealthy settlements to go to:`);
        Object.entries(cities)
        .sort((a,b) => b[1]['gold'] - a[1]['gold'] || a[0].localeCompare(b[0]))
        .forEach((x) => console.log(`${x[0]} -> Population: ${x[1]['pop']} citizens, Gold: ${x[1]['gold']} kg`));
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

solve([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
  ]
  )