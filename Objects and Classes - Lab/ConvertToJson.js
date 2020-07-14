function solve(nameInput, lastNameInput, hairColorInput) {
    let obj = {
        name: nameInput,
        lastName: lastNameInput,
        hairColor: hairColorInput
    }

    console.log(JSON.stringify(obj));
}

solve('George',
'Jones',
'Brown')