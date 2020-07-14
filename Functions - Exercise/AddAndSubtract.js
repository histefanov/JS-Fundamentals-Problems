function add(numOne, numTwo, numThree) {
    let addResult = numOne + numTwo;
    let finalResult = (a, b) => a - b;
    return finalResult(addResult, numThree);
}
add(1,2,3)