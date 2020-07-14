function commentsSolve(input) {
    const users = new Set();
    const comments = {};

    input.forEach(str => {
        if (str.startsWith('user ')) {
            users.add(str.slice(5))
        } else if (str.startsWith('article ')) {
            let article = str.slice(8);
            if (!comments.hasOwnProperty(article)) {
                comments[article] = [];
            }
        } else {
            let [userArticleInfo, commentInfo] = str.split(': ');
            let [currUser, currArticle] = userArticleInfo.split(' posts on ');
            if (users.has(currUser) && comments[currArticle]) {
                let [title, comment] = commentInfo.split(', ');
                comments[currArticle].push({
                    user: currUser,
                    title: title,
                    comment: comment
                })
            }
        }
    })
    let test = Object.entries(comments)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(art => {
            console.log(`Comments on ${art[0]}`);
            art[1]
                .sort((a, b) => a['user'].localeCompare(b['user']))
                .forEach(c => console.log(`--- From user ${c['user']}: ${c['title']} - ${c['comment']}`));
        })
}

commentsSolve([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
])
