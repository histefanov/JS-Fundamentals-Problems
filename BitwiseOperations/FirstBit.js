function firstBit(number) {
let numberShifted = number >> 1;
let binary = numberShifted.toString(2);
console.log(binary[binary.length - 1])
}

firstBit(2)