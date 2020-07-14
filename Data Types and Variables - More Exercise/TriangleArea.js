function triangleArea(a, b, c) {
    let semiPerimiter = (a + b + c) / 2;
    let area = Math.sqrt(semiPerimiter * (semiPerimiter - a) * (semiPerimiter - b) * (semiPerimiter - c));
    console.log(area);
}
triangleArea(2, 3.5, 4)