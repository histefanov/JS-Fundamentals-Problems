function solve(input) {
    let msg = input.shift();
    let command = input.shift();

    while (command !== 'Reveal') {
        let tokens = command.split(':|:');

        if (tokens[0] === 'InsertSpace') {
            let index = Number(tokens[1]);
            msg = msg.slice(0, index) + ' ' + msg.slice(index);
            console.log(msg)
        } else if (tokens[0] === 'Reverse') {
            let substr = tokens[1];

            if (msg.includes(substr)) {
                msg = msg
                .replace(substr, '')
                .concat(substr.split('').reverse().join(''));
                console.log(msg);
            } else {
                console.log('error');
            }
        } else if (tokens[0] === 'ChangeAll') {
            let substr = tokens[1];
            let replacement = tokens[2];
            const regex = new RegExp(substr, 'g')
            msg = msg.replace(regex, replacement);
            console.log(msg)
        }
        command = input.shift();
    }

    console.log(`You have a new text message: ${msg}`);
}

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])