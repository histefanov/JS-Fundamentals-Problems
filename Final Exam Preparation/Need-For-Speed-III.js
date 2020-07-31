function solve(input) {
    const n = Number(input.shift());
    const cars = {};

    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        cars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        }
    }

    let command = input.shift();

    while (command !== 'Stop') {
        let tokens = command.split(' : ');

        if (tokens[0] === 'Drive') {
            let [car, distance, fuel] = tokens.slice(1);
            
            if (cars[car]['fuel'] >= Number(fuel)) {
                cars[car]['fuel'] -= Number(fuel);
                cars[car]['mileage'] += Number(distance);
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)

                if (cars[car]['mileage'] > 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];
                }
            } else {
                console.log('Not enough fuel to make that ride')
            }

        } else if (tokens[0] === 'Refuel') {
            let [car, fuel] = tokens.slice(1);
            fuel = Number(fuel);
            let fuelLoaded = Math.min(fuel, (75 - cars[car]['fuel']))
            cars[car]['fuel'] += fuelLoaded;
            console.log(`${car} refueled with ${fuelLoaded} liters`)
        
        } else if (tokens[0] === 'Revert') {
            let [car, kilometers] = tokens.slice(1);
            kilometers = Number(kilometers);
            cars[car]['mileage'] -= kilometers;

            if(cars[car]['mileage'] < 10000) {
                cars[car]['mileage'] = 10000;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`)
            }
        }
        command = input.shift();
    }

    Object
    .entries(cars)
    .sort((a, b) => b[1]['mileage'] - a[1]['mileage'] || a[0].localeCompare(b[0]))
    .forEach((x) => {
        console.log(`${x[0]} -> Mileage: ${x[1]['mileage']} kms, Fuel in the tank: ${x[1]['fuel']} lt.`)
    })
}

solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])