function digitalRoot(n) {
    let digitArray = n.toString().split('');
    let sum = 0;

    for (const digit of digitArray) {
        sum += Number(digit);
    }

    n = sum;

    if (n < 10) {
        return n;
    } else {
        return digitalRoot(n);
    }
}
digitalRoot(493193)