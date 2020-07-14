function towns(input) {
    let townList = [];

    input.forEach(element => {
        let currentTown = element.split(' | ');
        let obj = {};
        obj.town = currentTown[0];
        obj.latitude = Number(currentTown[1]).toFixed(2);
        obj.longitude = Number(currentTown[2]).toFixed(2);
        townList.push(obj);
    });

    townList.forEach(x => console.log(x))
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])