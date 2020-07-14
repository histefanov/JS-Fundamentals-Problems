function triangleOfNums(numOfRows) {

    //     for (let i = 1; i <= numOfRows; i++) {
    //         let row = [];
    //         for (let j = 1; j <= i ; j++) {
    //             row.push(i);
    //         }
    //         console.log(row.join(" "));
    //     }
    // }
    // triangleOfNums(200)

    for (let i = 1; i <= numOfRows; i++) {
        let row = i + " ";
        console.log(row.repeat(i));
    }
}
triangleOfNums(6)
