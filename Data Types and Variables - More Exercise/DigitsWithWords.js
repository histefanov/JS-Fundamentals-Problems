function digitsWithWords(input) {
    let array = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let i = 0; i < array.length; i++) {
        if (input == array[i]) {
            console.log(i);
        }
    }
}
digitsWithWords('six')