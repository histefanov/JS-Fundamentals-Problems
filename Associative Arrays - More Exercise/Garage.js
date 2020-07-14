function solve(input) {
    let garages = [];
    let carNum = 1;
    for (const line of input) {
        let [garageNumber, carInfo] = line.split(' - ');
    
        let isContained = false;
        let found = garages.find(g => g.gNum === garageNumber);
        if (!found) {
            garages.push({
                gNum: garageNumber,
                cars: []
            })
            found = garages.find(g => g.gNum === garageNumber);
        }
        found.cars.push(carInfo);
    }
    garages.forEach(g => {
        console.log(`Garage № ${g.gNum}`);
        g.cars.forEach(c => {
            let info = [];
            c.split(', ').forEach(el => {
                let [f, t] = el.split(': ');
                info.push(`${f} - ${t}`);
            })
            console.log(`--- ${info.join(', ')}`);
        })  
    })
}
solve(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])