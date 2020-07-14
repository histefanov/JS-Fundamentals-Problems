function distinctArr(arr) {
    //     for (let i = 0; i < arr.length; i++) {
    //         for (let j = i + 1; j < arr.length; j++) {
    //             if (arr[i] == arr[j]) {
    //                 arr.splice(j, 1);
    //             }
    //         }
    //     }
    //     console.log(arr);
    // }
    arr.filter(a => {
        for (let i = arr.indexOf(a) + 1; i < arr.length; i++) {
            if (a == arr[i]) {
                arr.splice(i, 1);
            }
        }
    })
    return arr.join(' ');
}
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2])