function listOrder(arr) {
    let orderedList = arr.sort();
    
    for (let i = 1; i <= orderedList.length; i++) {
        console.log(`${i}.${orderedList[i - 1]}`)
    }
}
listOrder(["Potatoes", "Tomatoes", "Onions", "Apples"])