function pigIt(str) {
    let arr = str.split(' ');

    arr = arr.map(word => {
        return word > 'A' ? word.slice(1) + word[0] + 'ay' : word;
    })

    console.log(arr);
}
pigIt('Hello world !')