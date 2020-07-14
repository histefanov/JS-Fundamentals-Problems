function catalogue(input) {
    let productsArr = input.slice()
        .sort((a, b) => a.localeCompare(b))
        .map(x => x.split(' : ').join(': '));

    let productsObj = {};

    for (let i = 0; i < productsArr.length; i++) {
        let currentProduct = productsArr[i];
        productsObj[`${currentProduct[0]}`] = [];
    }

    for (const product of productsArr) {
        productsObj[`${product[0]}`].push(product);
    }

    productsObj.printInfo = () => {
        for (const letter in productsObj) {
            if (letter != 'printInfo') {
                console.log(letter);
                productsObj[letter].forEach(product => console.log(`  ${product}`));
            }
        }
    }

    productsObj.printInfo();
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])