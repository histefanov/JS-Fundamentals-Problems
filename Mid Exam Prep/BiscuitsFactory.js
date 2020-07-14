function biscuitsFactory(input) {
    const workerQuota = Number(input.shift());
    const workers = Number(input.shift());
    const competitorProduction = Number(input.shift());
    let monthlyProduction = 0;

    for (let i = 1; i <= 30; i++) {
        if (i % 3 !== 0) {
            monthlyProduction += workers * workerQuota;
        } else {
            monthlyProduction += Math.floor(workers * workerQuota * 0.75);
        }
    }

    console.log(`You have produced ${monthlyProduction} biscuits for the past month.`);

    if (monthlyProduction > competitorProduction) {
        console.log(`You produce ${(((monthlyProduction / competitorProduction) - 1) * 100).toFixed(2)} percent more biscuits.`)
    } else if (competitorProduction > monthlyProduction) {
        console.log(`You produce ${((1 - (monthlyProduction / competitorProduction)) * 100).toFixed(2)} percent less biscuits.`)
    }
}

biscuitsFactory([ '65', '12', '26000' ])