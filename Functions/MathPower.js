mathPow = (num, power) => {
    let result = num;
    for (let i = 1; i < power; i++) {
        result *= num;
    }
    return result;
}
mathPow(2,8)