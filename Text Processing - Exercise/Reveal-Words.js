function solve(inputWords, str) {
    let words = inputWords.split(', ');
    words.forEach(w => {
        let stars = '*'.repeat(w.length);
        str = str.replace(stars, w);
    })
    console.log(str)
}   

solve(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
)