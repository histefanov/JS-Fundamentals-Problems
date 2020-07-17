function solve(input) {
    const chars = input.pop().toUpperCase();
    const [str1, str2] = input;
    let passRaw = str1.concat(str2);
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let index = 0;

    for (const ch of passRaw) {
        if (vowels.includes(ch)) {
            passRaw = passRaw.replace(ch, chars[index % chars.length]);
            index++;
        }
    }
    
    let pass = passRaw.split('').reverse().join('');
    console.log(`Your generated password is ${pass}`);
}

solve([
    'ilovepizza',
    'ihatevegetables',
    'orange'
])