function solve(input) {
    const str = input.shift().toUpperCase();
    const uniqueChars = new Set();
    const chunks = str.match(/[^\d]+/g);
    const reps = str.match(/\d+/g);
    let res = '';

    for (let i = 0; i < chunks.length; i++) {
        if (Number(reps[i]) > 0) {
            res += chunks[i].repeat(Number(reps[i]));
            chunks[i].split('').forEach((x) => uniqueChars.add(x));
        }
    }
    console.log(`Unique symbols used: ${uniqueChars.size}`);
    console.log(res)
}

solve([
    'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15'
])