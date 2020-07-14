function bitDestroyer(number, position) {
    let mask = 1 << position;
    let result = number ^ mask;
    console.log(result);
}
bitDestroyer(111, 6)