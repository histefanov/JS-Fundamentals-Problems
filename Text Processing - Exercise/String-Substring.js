function solve(w, str) {
    if (str.toLowerCase().split(' ').includes(w.toLowerCase())) {
        console.log(w);
    } else {
        console.log(`${w} not found!`)
    }
}

solve(
    'javascr',
    'JavaScript is the best programming language'
)