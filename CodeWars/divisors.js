function divisors(int) {
    const nums = [];
    
    for (let i = 2; i <= Math.floor(int / 2); i++) {
        if (int % i === 0) {
            nums.push(i);
        }
    }
    console.log(nums);
    
}

divisors(100)