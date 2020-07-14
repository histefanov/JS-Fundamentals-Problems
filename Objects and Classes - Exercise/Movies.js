function movies(input) {
    let movieList = [];
    let commands = input.slice();

    while (commands.length > 0) {
        let currentCommand = commands.shift();

        if (currentCommand.split(' ').includes('addMovie')) {
            let newMovie = { name: `${currentCommand.split('addMovie ')[1]}` }
            movieList.push(newMovie)
            
        } else if (currentCommand.split(' ').includes('directedBy')) {
            let currentMovie = currentCommand.split(' directedBy ')[0];
            let director = currentCommand.split(' directedBy ')[1];

            for (const movie of movieList) {
                if (movie.name == currentMovie) {
                    movie.director = director;
                }
            }
        } else if (currentCommand.split(' ').includes('onDate')) {
            let currentMovie = currentCommand.split(' onDate ')[0];
            let date = currentCommand.split(' onDate ')[1];

            for (const movie of movieList) {
                if (movie.name == currentMovie) {
                    movie.date = date;
                }
            }
        }
    }
    
    for (const element of movieList) {
        if (element.name && element.date && element.director) {
            console.log(JSON.stringify(element));
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])