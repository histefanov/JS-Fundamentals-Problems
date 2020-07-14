function sorting(arr) {
    arr.sort((a, b) => {
        if (a.length - b.length != 0) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    })
    return arr.join('\n');
}
