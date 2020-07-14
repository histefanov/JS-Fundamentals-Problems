function crystalProcessing(crystals) {
    let desiredSize = crystals.shift();

    while (crystals.length != 0) {
        let crystalSize = crystals.shift();
        let cutCounter = 0;
        let lapCounter = 0;
        let grindCounter = 0;
        let etchCounter = 0;
        let xRayCounter = 0;

        console.log(`Processing chunk ${crystalSize} microns`);

        while (crystalSize >= desiredSize / 0.25) {
            crystalSize = cut(crystalSize);
            cutCounter++;
        }
        if (cutCounter > 0) {
            console.log(`Cut x${cutCounter}`);
            crystalSize = Math.floor(crystalSize);
            console.log('Transporting and washing');
        }

        while (crystalSize >= desiredSize / 0.80) {
            crystalSize = lap(crystalSize);
            lapCounter++;
        }
        if (lapCounter > 0) {
            console.log(`Lap x${lapCounter}`);
            crystalSize = Math.floor(crystalSize);
            console.log('Transporting and washing');
        }

        while (crystalSize >= desiredSize + 20) {
            crystalSize = grind(crystalSize);
            grindCounter++;
        }
        if (grindCounter > 0) {
            console.log(`Grind x${grindCounter}`);
            crystalSize = Math.floor(crystalSize);
            console.log('Transporting and washing');
        }

        while (crystalSize >= desiredSize + 1) {
            crystalSize = etch(crystalSize);
            etchCounter++;
        }
        if (etchCounter > 0) {
            console.log(`Etch x${etchCounter}`);
            crystalSize = Math.floor(crystalSize);
            console.log('Transporting and washing');
        }

        if (crystalSize < desiredSize) {
            crystalSize = xRay(crystalSize);
            xRayCounter++;
        }
        if (xRayCounter > 0) {
            console.log(`X-ray x${xRayCounter}`);
        }
        console.log(`Finished crystal ${desiredSize} microns`)
    }

    function cut(cr) {
        return (cr *= 0.25);
    }
    function lap(cr) {
        return (cr *= 0.8);
    }
    function grind(cr) {
        return (cr - 20);
    }
    function etch(cr) {
        return (cr - 2);
    }
    function xRay(cr) {
        return (cr + 1);
    }
    function transportAndWash(cr) {
        return Math.floor(cr);
    }
}
crystalProcessing([ 1000, 4000, 8100 ])