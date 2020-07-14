function dictionaryManager(input) {
    let unordered = input.map(x => JSON.parse(x));
    let ordered = unordered.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));
    let dictionary = Object.assign(...ordered);

    for (const key in dictionary) {
        console.log(`Term: ${key} => Definition: ${dictionary[key]}`)
    }
}
dictionaryManager([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])