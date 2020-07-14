passwordValidator = input => {
    let passLength = pass => pass.length >= 6 && pass.length <= 10;

    let allowedCharacters = pass => {
        for (let i = 0; i < pass.length; i++) {
            if (pass[i] < '0' || (pass[i] > '9' && pass[i] < 'A') || (pass[i] > 'Z' && pass[i] < 'a') || pass[i] > 'z') {
                return false;
            }
        }
        return true;
    }

    let minimumDigits = pass => {
        let digitCounter = 0;
        for (let i = 0; i < pass.length; i++) {
            if (pass[i] >= '0' && pass[i] <= '9') {
                digitCounter++;
            }
        }

        if (digitCounter < 2) {
            return false;
        } else {
            return true;
        }
    }

    if (passLength(input) && allowedCharacters(input) && minimumDigits(input)) {
        console.log('Password is valid')
    } else {
        if (!passLength(input)) {
            console.log('Password must be between 6 and 10 characters');
        }
        if (!allowedCharacters(input)) {
            console.log('Password must consist only of letters and digits');
        }
        if (!minimumDigits(input)) {
            console.log('Password must have at least 2 digits');
        }
    }
}

passwordValidator('2321444fdfd')