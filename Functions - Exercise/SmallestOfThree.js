function smallestNumber(numOne, numTwo, numThree) {
    return [numOne, numTwo, numThree].sort((a, b) => a - b)[0];
}

// let smallestNumber = (a, b, c) => [a, b, c].sort((a, b) => a - b)[0];

// function smallestNumberLong(a, b, c) {
//     let currentSmallest = Number.MAX_SAFE_INTEGER;
//     let arr = [a, b, c];
//     for (const num of arr) {
//         if (num < currentSmallest) {
//             currentSmallest = num;
//         }
//     }

//     return currentSmallest;
// }

// smallestNumberLong(2, 3, 2)