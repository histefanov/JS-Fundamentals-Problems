function solve(input) {
    const n = input.shift();

    for (let i = 0; i < n; i++) {
        let barcode = input[i];

        if (/@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/.test(barcode)) {
            let productGroup = barcode.match(/\d/g);

            if (productGroup) {
                console.log(`Product group: ${productGroup.join('')}`)
            } else {
                console.log(`Product group: 00`)
            }
        } else {
            console.log('Invalid barcode');
        }
    }
}
solve([
    3,
    '@#FreshFisH@#',
    '@###Brea0D@###',
    '@##Che4s6E@##'
])