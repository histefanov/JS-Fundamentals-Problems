function solve(str) {
    let arr = str.split(' ');

    let words = {
        [Symbol.iterator]: () => {
            return {
                next() {
                    return {
                        done: arr.length === 0,
                        value: arr.shift()
                    }
                }
            }
        }
    }

    for (const w of words) {
        if (w.startsWith('#') && w.length > 1) {
            let isValid = true;

            for (let i = 1; i < w.length; i++) {
                if (w[i] < 'A' || (w[i] > 'Z' && w[i] < 'a') || w[i] > 'z') {
                    isValid = false;
                    break;
                }
            }
            
            if (isValid) {
                console.log(w.substring(1));
            }
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')