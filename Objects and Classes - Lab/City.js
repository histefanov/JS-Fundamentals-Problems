function solve(nameInput, areaInput, populationInput, countryInput, postCodeInput) {
    let city = {};
    city.name = nameInput;
    city.area = areaInput;
    city.population = populationInput;
    city.country = countryInput;
    city.postCode = postCodeInput;

    for (const key in city) {
        console.log(`${key} -> ${city[key]}`)
    }
}

solve("Sofia"," 492", "1238438", "Bulgaria", "1000")