function solve(input) {
    let rawKey = input.shift();
    let command = input.shift();

    while (command !== 'Generate') {
        if (command.includes('Contains')) {
            let substr = command.split('>>>')[1];
            if (rawKey.includes(substr)) {
                console.log(`${rawKey} contains ${substr}`)
            } else {
                console.log('Substring not found!');
            }

        } else if (command.includes('Flip')) {
            let [casing, start, end] = command.split('>>>').slice(1);
            if (casing === 'Upper') {
                rawKey = rawKey.slice(0, start) + rawKey.substring(start, end).toUpperCase() + rawKey.slice(end);
            } else if (casing === 'Lower') {
                rawKey = rawKey.slice(0, start) + rawKey.substring(start, end).toLowerCase() + rawKey.slice(end);
            }
            console.log(rawKey);

        } else if (command.includes('Slice')) {
            let [start, end] = command.split('>>>').slice(1);
            rawKey = rawKey.replace(rawKey.substring(start, end), '');
            console.log(rawKey);
        }

        command = input.shift();
    }
    console.log(`Your activation key is: ${rawKey}`)
}

solve([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ]
  
)