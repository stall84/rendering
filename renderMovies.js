// Continuing with the same logic we've used before I'll create at least one other function to map later on that will go through each movie object individually
// and create the HTML code needed to render it 


function renderMovies(movies) {

    var finalHTML = movies.map(renderEach).join(' ');

    return `
        <div class="container mb-5">
            ${finalHTML}
        </div>
    `
}

// ran into some styling gltiches in the css and possibly in way I wrapped divs below. Mainly had problem getting 
// title of movie and release date to 'stick' together closer. Also the movie-holder div stretches to fit screen.. In interest of time & since I was able to render most of the 
// problem.. moving on 

function renderEach(flicks) {

    return `
        
        <div class="movie-holder rounded">
            <div class="poster-holder">
                <img style="height:275px; width:190px;" src="${flicks.poster}">
            </div>
            <div class="rounded movie-data">
                <div class="title-holder">
                <h2>${flicks.title}</h2>
                <h6>${flicks.year}</h6>
                </div>
                <h5>IMDB:<br>${flicks.imdbRating}/10</h5>
                <h5>Rotten Tomatoes:<br>${flicks.rottenTomatoesRating*100}%</h5>
            </div>
        </div>
    `
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}