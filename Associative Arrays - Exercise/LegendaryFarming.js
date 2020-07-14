function solve(input) {
    let yields = input.toLowerCase().split(' ');
    let materials = {keyMats: {shards: 0, fragments: 0, motes: 0}, junk: {}};
    
    for (let i = 0; i < yields.length - 1; i += 2) {
        let mat = yields[i + 1];
        let qty = Number(yields[i]);
        
        if (materials['keyMats'].hasOwnProperty(mat)) {
            materials['keyMats'][mat] += qty;

        } else if (materials['junk'].hasOwnProperty(mat)) {
            materials['junk'][mat] += qty;

        } else {
            materials['junk'][mat] = qty;
        }

        if (materials['keyMats']['shards'] >= 250) {
            materials['keyMats']['shards'] -= 250;
            console.log('Shadowmourne obtained!');
            break;
        } else if (materials['keyMats']['fragments'] >= 250) {
            materials['keyMats']['fragments'] -= 250;
            console.log('Valanyr obtained!');
            break;
        } else if (materials['keyMats']['motes'] >= 250) {
            materials['keyMats']['motes'] -= 250;
            console.log('Dragonwrath obtained!');
            break;
        }
    }

    let remainingKeyMats = Object.entries(materials['keyMats']).sort((a, b) => {
        if (b[1] - a[1] !== 0) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    })

    let remainingJunk = Object.entries(materials['junk']).sort((a, b) => a[0].localeCompare(b[0]));

    remainingKeyMats.forEach(x => console.log(`${x[0]}: ${x[1]}`));
    remainingJunk.forEach(x => console.log(`${x[0]}: ${x[1]}`));
}

solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')