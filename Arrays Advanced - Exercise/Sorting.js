function sorting(arr) {
    let arr2 = arr.slice(0);   
    let ascending = arr.sort((a, b) => a - b);
    let descending = arr2.sort((a, b) => b - a);
    let finalOrder = [];
    let ascCounter = 0;
    let descCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            finalOrder.push(descending[descCounter]);
            descCounter++;
        } else {
            finalOrder.push(ascending[ascCounter]);
            ascCounter++;
        }
    }
    console.log(finalOrder.join(' ')); 
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])