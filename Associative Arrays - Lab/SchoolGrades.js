function schoolGrades(input) {
    let schoolBook = {};
    
    for (const element of input) {
        let tokens = element.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (schoolBook[name] === undefined) {
            schoolBook[name] = grades;
        } else {
            schoolBook[name] = schoolBook[name].concat(grades);
        }
    }

    let sortedByAvg = Object.entries(schoolBook).sort((a, b) => {
        let aAvg = a[1].reduce((a, b) => a + b) / a[1].length;
        let bAvg = b[1].reduce((a, b) => a + b) / b[1].length;
        return aAvg - bAvg;
    });

    sortedByAvg.forEach(student => console.log(`${student[0]}: ${student[1].join(', ')}`))
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])