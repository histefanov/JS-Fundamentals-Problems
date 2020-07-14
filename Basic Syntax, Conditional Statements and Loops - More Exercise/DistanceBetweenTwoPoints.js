function distance(x1, y1, x2, y2) {
    let a = Math.abs(y1 - y2);
    let b = Math.abs(x1 - x2);
    let c = Math.sqrt(a ** 2 + b ** 2);
    console.log(c);
}
distance(7, -9, 3, 16)