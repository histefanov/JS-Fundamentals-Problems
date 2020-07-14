function rotation(array, rotat) {
    let numberOfRotations = rotat % array.length;
    for (let i = 0; i < numberOfRotations; i++) {
        array.push(array.shift());
    }
    console.log(array.join(' '));
    // let actualRotations = numberOfRotations % array.length;
    // let productArray = [];
    // let newIndex = 0;
    // for (const index in array) {
    //    if (index >= actualRotations) {
    //         productArray[newIndex] = array[index];
    //         newIndex++;
    //    }
    // }
    // for (const index in array) {
    //     if (index < actualRotations) {
    //         productArray[newIndex] = array[index];
    //         newIndex++;
    //     }
    // }
    // let result = '';
    // for (let i = 0; i < productArray.length; i++) {
    //     result += productArray[i] + ' ';
    // }
    // console.log(result);
}
rotation([2, 4, 15, 31], 5);