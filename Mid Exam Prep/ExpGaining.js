function xpGaining(input) {
    let info = input.map(Number);
    let xpNeeded = info.shift();
    let battlesCount = info.shift();

    for (let i = 1; i <= battlesCount; i++) {
        let xpGained = info[i - 1];

        if (i % 3 == 0) {
            xpNeeded -= xpGained * 1.15;
        } else if (i % 5 == 0) {
            xpNeeded -= xpGained * 0.9;
        } else {
            xpNeeded -= xpGained;
        }

        if (xpNeeded <= 0) {
            console.log(`Player successfully collected his needed experience for ${i} battles.`);
            return;
        }
    }

    console.log(`Player was not able to collect the needed experience, ${xpNeeded.toFixed(2)} more needed.`);
}

xpGaining([
    '500', '5',
    '50',  '100',
    '200', '100',
    '20'
  ]
  
)