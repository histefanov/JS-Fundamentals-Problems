function list(names) {
    let res = [];
    names.forEach((n) => res.push(n.name));
    let lastName = res.pop();
    return `${res.join(', ')} + \& ${lastName}`; 
}

list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])