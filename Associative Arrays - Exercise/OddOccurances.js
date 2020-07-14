function solve(input) {
    const elements = input.toLowerCase().split(' ');
    const map = new Map();

    elements.forEach(word => {
        if (map.has(word)) {
            let currentCount = map.get(word);
            map.set(word, currentCount + 1);
        } else {
            map.set(word, 1);
        }
    });
    
    let oddOccurances = Array.from(map.keys()).filter(key => map.get(key) % 2 !== 0);
    console.log(oddOccurances.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')