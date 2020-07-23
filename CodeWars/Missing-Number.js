function comp(array1, array2) {
    if (array1 === null || array2 === null) {
        return false;
        
    }
    const arrOneSorted = array1.sort((a, b) => a - b);
    const arrTwoSorted = array2.sort((a, b) => a - b);
    let areMatching = true;

    for (let i = 0; i < arrOneSorted.length; i++) {
        if (arrOneSorted[i] !== Math.sqrt(arrTwoSorted[i])) {
            areMatching = false;
            break;
        }
    }
    return areMatching;
}

comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])