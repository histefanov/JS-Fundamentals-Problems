function solve(input) {
    let msg = input.shift();
    input.slice(0, input.indexOf('Finish')).forEach((line) => {
        let actions = line.split(' ');

        if (actions[0] === 'Replace') {
            let [currentChar, newChar] = actions.slice(1);
            while (msg.includes(currentChar)) {
                msg = msg.replace(currentChar, newChar);
            }
            console.log(msg);

        } else if (actions[0] === 'Make') {
            actions[1] === 'Upper' ? msg = msg.toUpperCase() : msg = msg.toLowerCase();
            console.log(msg);

        } else if (actions[0] === 'Cut') {
            let [start, end] = actions.slice(1);
            start = Number(start);
            end = Number(end);
            if (msg[start] && msg[end]) {
                msg = msg.slice(0, start) + msg.slice(end + 1);
                console.log(msg)
            } else {
                console.log('Invalid indexes!')
            }

        } else if (actions[0] === 'Check') {
            if (msg.includes(actions[1])) {
                console.log(`Message contains ${actions[1]}`)
            } else {
                console.log(`Message doesn't contain ${actions[1]}`);
            }

        } else if (actions[0] === 'Sum') {
            let [start, end] = actions.slice(1);
            start = Number(start);
            end = Number(end);
            if (msg[start] && msg[end]) {
                console.log(msg
                    .substring(start, end + 1)
                    .split('')
                    .reduce((a, b) => a + b.charCodeAt(), 0));
            } else {
                console.log("Invalid indexes!")
            }
        }
    })
}

solve([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
])