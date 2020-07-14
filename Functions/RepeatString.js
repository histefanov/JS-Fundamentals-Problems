// let repeatString = (str, repetitions) => str.repeat(repetitions);
function repeatString(str, repetitions) {
    let result = '';
    for (let i = 0; i < repetitions; i++) {
        result += str;
    }
    return result;
}

