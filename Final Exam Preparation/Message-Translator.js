function solve(input) {
    const n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let msg = input[i];
        let res = msg.match(/!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})\]/);

        if (res !== null) {
            console.log(`${res[1]}: ${res[2].split('').map((x) => x.charCodeAt()).join(' ')}`);
        } else {
            console.log("The message is invalid")
        }
    }
}

solve(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]'])