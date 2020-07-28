function solve(input) {
    const key = Number(input.shift());
    let line = input.shift();

    while (line !== 'end') {
        let decryptedMessage = line
            .split('')
            .map((x) => String.fromCharCode(x.charCodeAt() - key))
            .join('')

        let kidInfo = decryptedMessage.match(/@([A-Za-z]+)[^@!:>-]*!([GN])!/);

        if (kidInfo && kidInfo[2] === 'G') {
            console.log(kidInfo[1]);
        }

        line = input.shift();
    }
}

solve([
    '4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    'DReh}e=<4lhzj1%K%',
    'end'
])