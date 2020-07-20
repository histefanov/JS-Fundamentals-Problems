function solve(input) {
    const [ch1, ch2, str] = input;
    const ch1CharCode = ch1.charCodeAt();
    const ch2CharCode = ch2.charCodeAt();
    let sum = 0;

    for (const ch of str) {
        if (ch.charCodeAt() > Math.min(ch1CharCode, ch2CharCode) &&
            ch.charCodeAt() < Math.max(ch1CharCode, ch2CharCode)) {

            sum += ch.charCodeAt();
        }
    }
    console.log(sum);
}

solve(['.', '@', 'dsg12gr5653feee5'])