function wallBuilder(arr) {
    let wall = arr.slice(0);
    let unitCounter = 0;
    let concreteUsed = [];

    while (!wall.every(a => a == 30)) {
        wall = wall.map(a => {
            if (a < 30) {
                unitCounter++;
                return a + 1;
            } else {
                return 30;
            }
        });

        concreteUsed.push(unitCounter * 195);
        unitCounter = 0;
    }

    let totalExpenses = 0;
    for (const portion of concreteUsed) {
        totalExpenses += portion * 1900;
    }

    console.log(concreteUsed.join(', '));
    console.log(`${totalExpenses} pesos`);
}