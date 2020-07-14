function fuelMoney(distance, passengers, pricePerLiter) {
    let fuelRequired = (distance / 100) * 7;
    fuelRequired += passengers * 0.100;
    let moneyNeeded = fuelRequired * pricePerLiter;
    console.log(`Needed money for that trip is ${moneyNeeded}lv.`)
}