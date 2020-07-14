function addAndRemove(commands) {
    let arr = [];
    for (const index in commands) {
        if (commands[index] == 'add') {
            arr.push(Number(index) + 1);
        } else if (commands[index] == 'remove') {
            arr.pop();
        }
    }
    if (arr.length > 0) {
        console.log(arr.join(' '));
    } else {
        console.log('Empty');
    }
}
addAndRemove(['add', 'add', 'remove', 'remove', 'remove']);