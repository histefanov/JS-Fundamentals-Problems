function solve(input) {
    let str = input.shift();
    let action = input.shift();

    while (action !== 'Done') {
        let tokens = action.split(' ');
        let command = tokens.shift();

        if (command === 'TakeOdd') {
            let res = '';
            for (let i = 0; i < str.length; i++) {
                if (i % 2 != 0) {
                    res += str[i];
                }
            }
            str = res;
            console.log(str);

        } else if (command === 'Cut') {
            let index = Number(tokens[0]);
            let length = Number(tokens[1]);

            let strToCut = str.substring(index, index + length);
            str = str.replace(strToCut, '');
            console.log(str)

        } else if (command === 'Substitute') {
            let [substr, substitute] = tokens;
            if (str.includes(substr)) {
                while (str.indexOf(substr) > -1) {
                    str = str.replace(substr, substitute);
                }
                console.log(str)
            } else {
                console.log('Nothing to replace!');
            }
        }
        action = input.shift()
    }
    console.log(`Your password is: ${str}`)
}

solve([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
  ]
  )