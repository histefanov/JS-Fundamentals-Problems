function reverse(n, numbers) {
    for (let i = numbers.length; i > n; i--) {
        numbers.pop();
    }
    console.log(numbers.reverse().join(' '));
}
reverse(2, [66, 43, 75, 89, 47])