function solve(input) {
    let obj = {};
    input.forEach(offer => {
        let [country, town, price] = offer.split(' > ');
        price = Number(price);

        if (!obj.hasOwnProperty(country)) {
            obj[country] = { [town]: price };

        } else {
            if (obj[country].hasOwnProperty(town)) {
                if (obj[country][town] > price) {
                    obj[country][town] = price
                }
            } else {
                obj[country][town] = price;
            }
        }
    });

    const sortedArr = Object.entries(obj).sort((a, b) => {
        if (a[0].localeCompare(b[0]) !== 0) {
            return a[0].localeCompare(b[0]);
        } else {

        }
    });

    sortedArr.forEach(country => {
        let res = `${country[0]} -> `;
        let sortedByPrice = Object.entries(country[1]).sort((a, b) => a[1] - b[1]);
        sortedByPrice.forEach(x => res += `${x[0]} -> ${x[1]} `)
        console.log(res);
    })
}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])