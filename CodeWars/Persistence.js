function persistence(num) {
    let persCounter = 0;

    while (num.toString().length > 1) {
        let result = 1;

        for (const digit of num.toString()) {
            result *= Number(digit);
        }
        num = result;
        persCounter++;
    }
    console.log(persCounter);
}
persistence(9)
