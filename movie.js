class movie {
    constructor(title="", studio="", rating="") {
        this.title = title;
        this.studio = studio;
        this.rating = rating ? rating :"PG";
    }

    getPG(base_type_movie) {
        return base_type_movie.filter(movie_item => {
            return movie_item.rating == "PG"
            });
    }
}

var movieObject = new movie("Casino Royale", "Eon Productions", "PG­13");
console.log(movieObject);

var movieList = [
    {
        title: "Titanic",
        studio: "Baja Studios",
        rating: "PG"
    },
    {
        title: "Test",
        studio: "Test Studios",
        rating: "PG1"
    }
]
console.log(movieObject.getPG(movieList));
