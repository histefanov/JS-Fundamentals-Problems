function solve(input) {
    const arr = [];
    let command = input.shift();

    while (command !== 'end') {
        let ch = command.split(':')[0];
        let indexes = command
        .split(':')[1]
        .split('/')
        .map(Number);
        indexes.forEach((i) => arr[i] = ch);
        command = input.shift();
    }
    console.log(arr.join(''));
}

solve([
    'a:0/3/5/11', 
    'v:1/4',
    'j:2', 
    'm:6/9/15',
    's:7/13', 
    'd:8/14',
    'c:10', 
    'l:12',
    'end'
])