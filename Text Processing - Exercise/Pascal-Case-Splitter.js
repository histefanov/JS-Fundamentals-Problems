function solve(str) {
    let res = `${str[0]}`;

    for (let i = 1; i < str.length; i++) {
        if (str.charCodeAt(i) < ('a').charCodeAt()) {
            res += `, ${str[i]}`
        } else {
            res += str[i];
        }
    }
    console.log(res)
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')