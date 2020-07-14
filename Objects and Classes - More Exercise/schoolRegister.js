function schoolRegister(input) {
    const studentsInfo = input.slice();
    const registerUnsorted = [];

    studentsInfo.forEach(el => {
        let student = el.split(', ');
        let name = student[0].split(': ')[1];
        let grade = Number(student[1].split(': ')[1]);
        let score = Number(student[2].split(': ')[1]);

        registerUnsorted.push({
            studentName: name,
            grade: grade,
            score: score,
            nextGrade: grade + 1
        });
    })

    const register = registerUnsorted.sort((a, b) => {
        return a['grade'] - b['grade'];
    })

    const nextYearRegister = register.filter(a => a['score'] >= 3);

    let nextGrades = [];

    nextYearRegister.forEach(el => {
        nextGrades.push(el['nextGrade']);
    })

    nextGrades = nextGrades.filter((a, ind, arr) => {
        if (a != arr[ind + 1]) {
            return a;
        }
    })

    let result = [];

    nextGrades.forEach(grade => {

        let students = [];
        let scores = [];
        let scoreSum = 0;

        nextYearRegister.forEach(el => {
            if (el['nextGrade'] == grade) {
                students.push(el['studentName']);
                scores.push(el['score']);
            }
        })
        scores.forEach(x => scoreSum += x);
        let avgScore = (scoreSum / scores.length).toFixed(2);

        result.push({grade: grade, students: students, average: avgScore})
    })

    result.forEach(el => {
        console.log(`${el['grade']} Grade`);
        console.log(`List of students: ${el['students'].join(', ')}`);
        console.log(`Average annual grade from last year: ${el['average']}`);
        console.log()
    });
}

schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"])