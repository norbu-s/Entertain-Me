let movieTitle = document.getElementById("title"); //movie tile section
let moviesHistory = []
let movie

// Function to render buttons based on what is in moviesHistory array
function renderButtons() {
    $(".buttons-view").empty();
    for (var i = 0; i < moviesHistory.length; i++) {
        var a = $("<button>");
        a.addClass("btn btn-success movie-btn");
        a.attr("data-title", moviesHistory[i]);
        a.text(moviesHistory[i]);
        $(".buttons-view").prepend(a);
    }
}
// Function to display movie info - instead of API, get values from DB
function displayMovieTitle() {
            const url = `/api/movies/${title}`;
            $.ajax({
                    type: 'GET',
                    url: url,
                })

        .then(function(response) {
            $(".search-data").html("");
            const movieDiv = $("<div class='movie'>");
        })
        
};


//On click event listener for movie buttons
$(document).on("click", ".movie-btn", function () {
    movie = $(this).attr("data-title");
    displayMovieTitle()
    console.log("movie button clicked", movie);
    //to add the movie title into review page
    movieTitle.value = movie;
    console.log("movie", movie);
})

// //On click event listener for clear the movie in the review form button
$("#clear-review").on("click", function() {
    $("data-title").empty();
    //refresh page
    location.reload();
});


//To run when document loads (if/else statement that will pull from local storage only if the value is not "null")
$(document).ready(function() {
    if(localStorage.getItem("movies") !== null) {
        var savedMovie = localStorage.getItem("movies");
        var pushMovies = JSON.parse(savedMovie)
        moviesHistory = moviesHistory.concat(pushMovies)
    }
    //render buttons
    renderButtons()
  })



