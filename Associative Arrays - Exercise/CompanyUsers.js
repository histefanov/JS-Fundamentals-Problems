function solve(input) {
    let register = {};

    input.forEach(line => {
        let [company, employee] = line.split(' -> ');
        if (!register.hasOwnProperty(company)) {
            register[company] = [employee];
        } else if (!register[company].includes(employee)) {
            register[company].push(employee);
        }
    })

    Object.entries(register)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(c => {
            console.log(c[0]);
            c[1].forEach(e => console.log(`-- ${e}`));
        })
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])