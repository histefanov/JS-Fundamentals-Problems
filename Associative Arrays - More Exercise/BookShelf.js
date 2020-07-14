function bookShelfSolve(input) {
    const library = {};
    input.forEach(line => {
        if (line.includes(' -> ')) {
            let [id, genre] = line.split(' -> ');
            
            if (!library.hasOwnProperty(id)) {
                library[id] = {
                    shelfGenre: genre,
                    books: []
                }
            }
        } else {
            let title = line.split(': ')[0];
            let [author, genre] = line.split(': ')[1].split(', ');
            for (const id in library) {
                if (library[id]['shelfGenre'] === genre) {
                    library[id]['books'].push({
                        title: title,
                        author: author
                    })
                }
            }
        }
    })

    let test = Object.entries(library)
    .sort((a, b) => b[1]['books'].length - a[1]['books'].length)
    .forEach(sh => {
        console.log(`${sh[0]} ${sh[1]['shelfGenre']}: ${sh[1]['books'].length}`);
        sh[1]['books']
        .sort((a, b) => {a['title'].localeCompare(b['title'])})
        .forEach(book => console.log(`--> ${book['title']}: ${book['author']}`))
    })
}

bookShelfSolve([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
])