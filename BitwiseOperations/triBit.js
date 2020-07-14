function triBit(num, position) {
    let initialMask = 7;
    let mask = initialMask << position;
    let result = num ^ mask;
    console.log(result);
}

triBit(44444,
    4)