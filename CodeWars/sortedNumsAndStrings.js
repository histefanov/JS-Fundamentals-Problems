function dbSort(a) {
    let nums = a
        .filter(x => typeof x == 'number')
        .sort((a, b) => a - b);

    let strings = a
        .filter(x => typeof x == 'string')
        .sort((a, b) => a.localeCompare(b));

    console.log(nums.concat(strings));
}

dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])