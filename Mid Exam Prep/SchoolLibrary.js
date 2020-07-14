function schoolLibrary(input) {
    const books = input.shift().split('&');
    let action = input.shift();

    while (action !== 'Done') {
        const actionArr = action.split(' | ');
        const command = actionArr.shift();
        let book = ''

        switch (command) {
            case 'Add Book':
                book = actionArr.shift();
                if (!books.includes(book)) {
                    books.unshift(book);
                }
                break;
            case 'Take Book':
                book = actionArr.shift();
                if (books.includes(book)) {
                    books.splice(books.indexOf(book), 1);
                }
                break;
            case 'Swap Books':
                let book1 = actionArr.shift();
                let book2 = actionArr.shift();
                let index1 = books.indexOf(book1);
                let index2 = books.indexOf(book2);
                if (books.includes(book1) && books.includes(book2)) {
                    books[index1] = book2;
                    books[index2] = book1;
                }
                break;
            case 'Insert Book':
                book = actionArr.shift();
                books.push(book);
                break;
            case 'Check Book':
                let index = actionArr.shift();
                if (books[index] !== undefined) {
                    console.log(books[index]);
                }
                break;
        }

        action = input.shift();
    }
    console.log(books.join(', '));
}

schoolLibrary([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
    ''
  ]
  
)