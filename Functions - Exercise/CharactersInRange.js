function charactersInRange(charOne, charTwo) {
    let charsInbetween = [];
    let smallerCharCode = Math.min((charOne.charCodeAt() + 1), (charTwo.charCodeAt() + 1));
    let biggerCharCode = Math.max(charOne.charCodeAt(), charTwo.charCodeAt());
    for (let i = smallerCharCode; i < biggerCharCode; i++) {
        charsInbetween.push(String.fromCharCode(i));
    }

    return charsInbetween.join(' ');  
}
charactersInRange('C', '#')