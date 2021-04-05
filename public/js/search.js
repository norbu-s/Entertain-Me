var searchText = $(".search-data")
var moviesHistory = []
let movie;


// Function to set movies from MoviesHistory array into local storage
function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(moviesHistory));
}



// Function to render buttons based on what is in moviesHistory array
function renderButtons() {
    $(".buttons-view").empty();
    for (var i = 0; i < moviesHistory.length; i++) {
        var a = $("<button>");
        a.addClass("btn btn-danger movie-btn");
        a.attr("data-title", moviesHistory[i]);
        a.text(moviesHistory[i]);
        $(".buttons-view").prepend(a);
    }
}


// Function to display movie info

function displayMovieInfo() {
    const queryURL = '/api/search/' + movie;
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
            $(".search-data").html("")

            const movieDiv = $("<div class='movie'>")
            movieDiv.html("<h4>You Want to Review</h4><br>")
            searchText.prepend(movieDiv)

            const imgURL = response.Poster;
            const image = $("<img class='poster'>").attr("src", imgURL);
            movieDiv.append(image);

            const title = response.title;
            const pOne = $("<h2>").text(title);

            const genre = response.genre;
            const pTwo = $("<p>").text("Genre: " + genre);
            movieDiv.append(pOne);
            const plot = response.plot;
            const pThree = $("<p>").text("Plot: " + plot);
            movieDiv.append(pTwo);
            const director = response.director;
            const pFour = $("<p>").text("Director: " + director);
            movieDiv.append(pThree);
            const actors = response.actors;
            const pFive = $("<p>").text("Actors: " + actors);
            movieDiv.append(pFour);
            const year = response.year;
            const pSix = $("<p>").text("Year: " + year);
            movieDiv.append(pFive);

            if (moviesHistory.includes(response.title) === false) {
                moviesHistory.push(response.title);
            }

            renderButtons()
            saveMovies()
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}





//On click event listener for search button
$("#run-search").on("click", function() {
    movie = $("#search-term").val()
    displayMovieInfo()

})

//On click event listener for movie buttons
$(document).on("click", ".movie-btn", function() {
    movie = $(this).attr("data-title");
    displayMovieInfo()

})

//On click event listener for clear search results button
$("#clear-search").on("click", function() {
    localStorage.clear("movies")
    moviesHistory = []
    $(".buttons-view").empty()
        //refresh page
    location.reload()
})




//To run when document loads (if/else statement that will pull from local storage only if the value is not "null")
$(document).ready(function() {
    if (localStorage.getItem("movies") !== null) {
        var savedMovie = localStorage.getItem("movies");
        var pushMovies = JSON.parse(savedMovie)
        moviesHistory = moviesHistory.concat(pushMovies)
    }

    //render buttons
    renderButtons()
});