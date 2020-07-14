function pthBit(number, position) {
    let shiftNum = position;
    let numberShifted = number >> shiftNum;
    let bitAtPosition1 = numberShifted & 1;
    console.log(bitAtPosition1);
}
pthBit(111, 8)