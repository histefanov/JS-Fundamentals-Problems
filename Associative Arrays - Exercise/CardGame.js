function cardGame(input) {
    const players = {};
    const rankPoints = ['blank', 'blank', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suitPoints = ['blank', 'C', 'D', 'H', 'S'];

    input.forEach(line => {
        const tokens = line.split(': ');
        const name = tokens[0];
        const cards = tokens[1].split(', ');

        if (players[name] === undefined) {
            players[name] = new Set();
            cards.forEach(x => players[name].add(x));
        } else {
            cards.forEach(x => players[name].add(x));
        }
    })

    for (const key in players) {
        const currCards = Array.from(players[key]);
        let totalPoints = 0;

        for (const card of currCards) {
            if (card.length === 2) {
                var rank = card[0];
                var suit = card[1];
            } else {
                var rank = '10';
                var suit = card[2];
            }
            const currPoints = rankPoints.indexOf(rank) * suitPoints.indexOf(suit);
            totalPoints += currPoints;
        }

        console.log(`${key}: ${totalPoints}`);
    };
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])