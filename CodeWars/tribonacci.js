function tribonacci(signature, n) {
    while (signature.length < n) {
        signature.push(signature.slice(signature.length - 3).reduce((a, b) => a + b, 0));
    }

    console.log(signature)
}

tribonacci([1,1,1], 10)