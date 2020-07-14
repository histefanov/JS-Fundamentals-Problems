function primeChecker(num) {
    let isPrime = true;
    let j = Math.floor(Math.sqrt(num) + 1);
    for (let i = 2; i <= j; i++) {
        if (num % i == 0) {
            isPrime = false;
        }
    }
    console.log(isPrime);
}
primeChecker(7)