function search(arr1, arr2) {
    let magicNum = arr2[2];
    let numbers = arr1.slice(0, arr2[0]);
    numbers.splice(0, arr2[1]);
    let occurances = numbers.filter(a => a == magicNum).length;

    console.log(`Number ${magicNum} occurs ${occurances} times.`);
}
search([5, 2, 3, 4, 1, 6],
    [5, 2, 3])