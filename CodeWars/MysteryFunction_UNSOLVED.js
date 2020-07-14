function mystery(n) {
    const m = n.toString(2).length;
    let t = ['0', '1'];

    for (let i = 1; i < m; i++) {
        const tRev = t.slice().reverse();
        t = t.map(bit => '0' + bit).concat(tRev.map(bit => '1' + bit));
    }
    let res = parseInt(t[n], 2);
    
    // let test = t.map(x => parseInt(x, 2));
    // console.log(test);
    console.log(t);
    console.log(res);
    let arr = [1, 2, 3, 4];
    
    // console.log(n);
    // console.log(test[n-1])
    // console.log((18).toString(2))
}

mystery(9);

