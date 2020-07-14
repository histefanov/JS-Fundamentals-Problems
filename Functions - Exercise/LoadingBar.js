loadingBar = number => {
    if (number < 100) {
        return `${number}% [${'%'.repeat(number / 10)}${'.'.repeat(10 - (number / 10))}]\nStill loading...`;
    } else {
        return `100% Complete!\n[%%%%%%%%%%]`;
    }
}
loadingBar(100)