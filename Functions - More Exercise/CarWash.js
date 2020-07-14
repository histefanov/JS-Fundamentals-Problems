function carWash(actions) {
    let value = 0;

    for (const action of actions) {
        switch (action) {
            case 'soap':
                soap();
                break;
            case 'water':
                water();
                break;
            case 'vacuum cleaner':
                vacuumCleaner();
                break;
            case 'mud':
                mud();
                break;
        }
    }

    return `The car is ${value.toFixed(2)}% clean.`;

    function soap() {
       return value += 10;
    }
    function water() {
       return value *= 1.2;
    }
    function vacuumCleaner() {
       return value *= 1.25;
    }
    function mud() {
       return value *= 0.9;
    }
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
