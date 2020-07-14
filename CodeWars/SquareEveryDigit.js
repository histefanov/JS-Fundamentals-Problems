function squareDigits(num) {
    const res = num
    .toString()
    .split('')
    .map(x => Number(x) ** 2)
    .join('');

    return res;
}

squareDigits(224)