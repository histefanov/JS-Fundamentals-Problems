function spiceMustFlow(startingYield) {
    let spiceStored = 0;
    let daysCounter = 0;
    while (startingYield >= 100) {
        spiceStored += startingYield;
        daysCounter++;
        if (spiceStored < 26) {
            spiceStored -= spiceStored;
        } else {
            spiceStored -= 26;
        }
        startingYield -= 10;
    }
    if (spiceStored < 26) {
        spiceStored -= spiceStored;
    } else {
        spiceStored -= 26;
    }
    console.log(daysCounter);
    console.log(spiceStored);
}
spiceMustFlow(111)