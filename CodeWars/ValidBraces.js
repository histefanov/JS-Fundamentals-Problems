function validBraces(input){
    function nonNestedValidation(braces) {
        for (let i = 0; i < braces.length; i += 2) {
            if (braces[i] === '(') {
                if (braces[i + 1] !== ')') {
                    return false;
                }

            } else if (braces[i] === '{') {
                if (braces[i + 1] !== '}') {
                    return false;
                }

            } else if (braces[i] === '[') {
                if (braces[i + 1] !== ']') {
                    return false;
                }
            } else {
                return false;
            }
        }

        return true;
    }

    function nestedValidation(braces) {
        for (let i = 0; i < braces.length / 2; i++) {
            if (braces[i] === '(') {
                if (braces[braces.length - 1 - i] !== ')') {
                    return false
                }
            } else if (braces[i] === '{') {
                if (braces[braces.length - 1 - i] !== '}') {
                    return false
                }
            } else if (braces[i] === '[') {
                if (braces[braces.length - 1 - i] !== ']') {
                    return false
                }
            } else {
                return false
            }
        }

        return true
    }

    let isValid = true;
    let braces = input.split('');

    for (let i = 0; i < braces.length - 1; i++) {
        let currOpeningBrace = braces[i];

        if (currOpeningBrace = '(') {
            
        }
    }
}

validBraces('((())){}')