function pointsValidation(input) {
    let p = inputConverter(1);
    let q = inputConverter(2);

    if (pointToOriginDistance(p) % 1 == 0) {
        console.log(`{${p.join(', ')}} to {0, 0} is valid`);
    } else {
        console.log(`{${p.join(', ')}} to {0, 0} is invalid`);
    }

    if (pointToOriginDistance(q) % 1 == 0) {
        console.log(`{${q.join(', ')}} to {0, 0} is valid`)
    } else {
        console.log(`{${q.join(', ')}} to {0, 0} is invalid`)
    }

    if (pointToPointDistance(p, q) % 1 == 0) {
        console.log(`{${p.join(', ')}} to {${q.join(', ')}} is valid`);
    } else {
        console.log(`{${p.join(', ')}} to {${q.join(', ')}} is invalid`);
    }

    function inputConverter(point) {
        if (point == 1) {
            return [input[0], input[1]];
        } else {
            return [input[2], input[3]];
        }
    }

    function pointToPointDistance(pointOne, pointTwo) {
        let a = Math.abs(pointOne[0] - pointTwo[0]);
        let b = Math.abs(pointOne[1] - pointTwo[1]);

        return Math.sqrt(a ** 2 + b ** 2);
    }

    function pointToOriginDistance(point) {
        let a = Math.abs(point[0]);
        let b = Math.abs(point[1]);

        return Math.sqrt(a ** 2 + b ** 2);
    }
}
pointsValidation([2, 1, 1, 1]);