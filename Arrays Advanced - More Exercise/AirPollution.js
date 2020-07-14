function airPollution(arr1, arr2) {
    let cityMap = arr1.map(a => a.split(' ').map(Number));
    let forces = arr2.map(a => a.split(' '));
    let pollutedAreas = [];

    while (forces.length > 0) {
        let currentForce = forces.shift();
        let force = currentForce[0];
        let index = Number(currentForce[1]);

        switch (force) {
            case "breeze":
                cityMap[index] = cityMap[index].map(a => Math.max((a -= 15), 0));
                break;

            case "gale":
                for (let i = 0; i < cityMap.length; i++) {
                    cityMap[i][index] = Math.max((cityMap[i][index] -= 20), 0);
                }
                break;

            case "smog":
                cityMap = cityMap.map((row) => {
                    row = row.map(a => a += index);
                    return row;
                });
                break;
        }
    }

    for (let i = 0; i < cityMap.length; i++) {
        for (let j = 0; j < cityMap.length; j++) {
            if (cityMap[i][j] >= 50) {
                pollutedAreas.push(`[${i}-${j}]`);
            }
        }
    }

    if (pollutedAreas.length > 0) {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    } else {
        console.log("No polluted areas");
    }
}
airPollution(["5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24"],
    ["breeze 1", "gale 2", "smog 25"])