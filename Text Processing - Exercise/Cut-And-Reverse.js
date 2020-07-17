function solve(str) {
    function cut(s) {
        let res = [];
        res.push(s.substring(0, s.length / 2));
        res.push(s.substring(s.length / 2));
        return res;
    }

    function reverse(s) {
        let res = '';
        for (let i = s.length - 1; i >= 0; i--) {
            res += s[i];
        }
        return res;
    }

    let arr = cut(str);
    arr.forEach((x) => console.log(reverse(x)));
}

solve('tluciffiDsIsihTgnizamAoSsIsihT')