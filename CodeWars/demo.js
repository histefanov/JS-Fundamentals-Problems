function solve(s){
    s = s.sort();
    
    for (let i = 0; i < s.length - 1; i++) {
        if (s.charCodeAt(i) !== s.charCodeAt(i + 1) - 1) {
            console.log(false);           
            return false;
        }
    }
    console.log(true);
    return true;
}

solve('mn')