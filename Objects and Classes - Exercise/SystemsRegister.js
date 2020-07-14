function systemsRegister(input) {
    Object.size = function (obj) {
        let size = 0;
        for (const key in obj) {
            size++;
        }
        return size;
    }

    let database = {};

    for (let i = 0; i < input.length; i++) {
        let currentElement = input[i].split(' | ');
        let system = currentElement[0];
        let component = currentElement[1];
        let subcomponent = currentElement[2];

        if (database[`${system}`] == undefined) {
            database[`${system}`] = {};
            database[`${system}`][`${component}`] = [];
            database[`${system}`][`${component}`].push(subcomponent);

        } else {
            if (database[`${system}`][`${component}`] == undefined) {
                database[`${system}`][`${component}`] = [];
                database[`${system}`][`${component}`].push(subcomponent);

            } else {
                database[`${system}`][`${component}`].push(subcomponent);
            }
        }
    }


    let systemsArrSorted = Object.keys(database).sort((a, b) => {
        if (Object.size(database[a]) > Object.size(database[b])) {
            return -1;
        } else if (Object.size(database[a]) < Object.size(database[b])) {
            return 1;
        } else {
            return a.localeCompare(b);
        }
    });

    systemsArrSorted.forEach(system => {
        console.log(system);

        let componentsArrSorted = Object.keys(database[system]).sort((a, b) => {
            return database[system][b].length - database[system][a].length;
        })

        componentsArrSorted.forEach(x => {
            console.log(`|||${x}`)

            for (const element of database[system][x]) {
                console.log(`||||||${element}`)
            }
        })
    })
}
systemsRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])