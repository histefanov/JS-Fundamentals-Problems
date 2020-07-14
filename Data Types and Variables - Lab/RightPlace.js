function rightPlace(initialString, char, expectedString) {
    // let replacedString = '';
    // for (let i = 0; i < initialString.length; i++) {
    //     if (initialString[i] != '_') {
    //         replacedString += initialString[i];
    //     } else {
    //         replacedString += char;
    //     }
    // }
    let replacedString = initialString.replace('_', char);
    let output = replacedString == expectedString ? 'Matched' : 'Not Matched';
    console.log(output);
}
rightPlace('Str_ng', 'o', 'String');    