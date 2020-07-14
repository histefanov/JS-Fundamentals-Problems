function solve(n, k) {
    let arr = [1];
    let sum = 0;

    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= i - k; j--) {
            if (j >= 0) {
            sum += arr[j];
            }
        }

        arr[i] = sum;
        sum = 0;
    }

    return arr.join(' ');
}
solve(8, 2);