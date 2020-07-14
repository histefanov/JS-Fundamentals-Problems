function sort(num1, num2, num3) {
    let array = [num1, num2, num3];
    array.sort(function(a, b){return b-a});
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
}
sort(-67, -154, 0)