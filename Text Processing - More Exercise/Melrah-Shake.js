function solve(input) {
    function validator(str, pattern) {
        if (str.indexOf(pattern) !== -1 &&
            str.lastIndexOf(pattern) !== -1 &&
            pattern.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    function shake(str, pattern) {
        str = str.replace(pattern, '');
        let lastOccuranceIndex = str.lastIndexOf(pattern);
        str = str.substring(0, lastOccuranceIndex) + str.substring(lastOccuranceIndex + pattern.length);
        return str;
    }

    function newPattern(pattern) {
        let index = pattern.length / 2;
        pattern = pattern.substring(0, index) + pattern.substring(index + 1);
        return pattern;
    }

    let [str, pattern] = input;
    let isShakable = validator(str, pattern);

    while (isShakable) {
        str = shake(str, pattern);
        console.log('Shaked it.');
        pattern = newPattern(pattern);
        isShakable = validator(str, pattern);
    }

    console.log('No shake.');
    console.log(str);
}

solve(['##mtm!!mm.mm*mtm.#', 'mtm', ''])