function gaming(input) {
    let collection = input.shift().split(' ');
    while (input[0] != 'Play!') {
        let command = input.shift().split(' ');
        let game = command[1];
        if (command[0] == 'Install' && !collection.includes(game)) {
            collection.push(game);
        } else if (command[0] == 'Uninstall' && collection.includes(game)) {
            collection.splice(collection.indexOf(game), 1);
        } else if (command[0] == 'Update' && collection.includes(game)) {
            collection.splice(collection.indexOf(game), 1);
            collection.push(game);
        } else if (command[0] == 'Expansion' && collection.includes(game.split('-')[0])) {
            let gameToExpand = game.split('-')[0];
            let gameExpansion = `${gameToExpand}:${game.split('-')[1]}`
            collection.splice(collection.indexOf(gameToExpand) + 1, 0, gameExpansion);
        }
    }
    console.log(collection.join(' '));
}
gaming(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!'])