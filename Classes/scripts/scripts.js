class Movie {
    constructor(title, director, genre, releaseYear) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
    }

    getMovieInfo() {
        return `${this.title} directed by ${this.director}, Genre: ${this.genre}, Released in ${this.releaseYear}`;
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const movie1 = new Movie("Plane", "Jean-François Richet", "Action/ Thriller", 2023);
    const movie2 = new Movie("The Shawshank Redemption", "Frank Darabont", "Drama", 1994);
    const movie3 = new Movie("The BeeKeeper", "David Ayer", "Action/ Thriller", 2024);
    const movie4 = new Movie("The Witcher", "Beau DeMayo", "Action/ Fantasy", 2019);

    function displayMovieInfo(movieInstance, elementId) {
        const movieInfo = movieInstance.getMovieInfo();
        document.getElementById(elementId).innerHTML = movieInfo;
    }

    displayMovieInfo(movie1, "movie1");
    displayMovieInfo(movie2, "movie2");
    displayMovieInfo(movie3, "movie3");
    displayMovieInfo(movie4, "movie4");
});