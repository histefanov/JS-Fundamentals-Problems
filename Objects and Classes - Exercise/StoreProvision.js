function storeProvision(currentStock, delivery) {
    // class Product {
    //     constructor(type, quantity) {
    //         this.type = type;
    //         this.quantity = Number(quantity);
    //     }

    //     printInfo() {
    //         console.log(`${this.type} -> ${this.quantity}`);
    //     }
    // }

    // let products = [];

    // for (let i = 0; i < currentStock.length; i += 2) {
    //     products.push(new Product(currentStock[i], currentStock[i + 1]))
    // }

    // for (let i = 0; i < delivery.length; i += 2) {
    //     let deliveryProduct = delivery[i];
    //     let qnty = delivery[i + 1];

    //     for (const element of products) {
    //         if (element.type == deliveryProduct) {
    //             element.quantity += Number(qnty);
    //             delivery.splice(i, 2);
    //             i -= 2;
    //         }
    //     }
    // }

    // for (let i = 0; i < delivery.length; i += 2) {
    //     products.push(new Product(delivery[i], delivery[i + 1]))
    // }

    // products.forEach(x => x.printInfo());

    let products = {};

    currentStock.forEach((el, index) => {
        if (index % 2 == 0) {
            products[el] = Number(currentStock[index + 1]);
        }
    });

    delivery.forEach((el, index) => {
        if (index % 2 == 0) {
            if (products[el] == undefined) {
                products[el] = Number(delivery[index + 1]);                
            } else {
                products[el] += Number(delivery[index + 1]);
            }
        }
    })

    for (const key in products) {
        console.log(`${key} -> ${products[key]}`)
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])