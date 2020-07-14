function solve(arr) {
    let arrAscending = arr.sort((a, b) => a - b);
    let smallestTwo = arrAscending.slice(0, 2);
    
    return smallestTwo.join(' ');
}
solve([30, 15, 50, 5])