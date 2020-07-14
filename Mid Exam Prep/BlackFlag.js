function blackFlag(input) {
    const daysCount = Number(input.shift());
    const plunderQuota = Number(input.shift());
    const targetPlunder = Number(input.shift());
    let plunder = 0;

    for (let i = 1; i <= daysCount; i++) {
        if (i % 3 !== 0) {
            plunder += plunderQuota;
        } else {
            plunder += plunderQuota * 1.5;
        }

        if (i % 5 === 0) {
            plunder *= 0.7;
        }
    }

    if (plunder >= targetPlunder) {
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((plunder / targetPlunder) * 100).toFixed(2)}% of the plunder.`);
    }
}
blackFlag(['10', '20', '380'])