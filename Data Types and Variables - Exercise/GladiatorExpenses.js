function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmets = parseInt(lostFights / 2);
    let swords = parseInt(lostFights / 3);
    let shields = parseInt(lostFights / 6);
    let armors = parseInt(lostFights / 12);
    let expenses = helmets * helmetPrice + swords * swordPrice + shields * shieldPrice + armors * armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200)