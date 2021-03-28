<<<<<<< HEAD
var searchText = $(".search-data");
var moviesHistory = [];
var movie;
=======
const searchText = $(".search-data")
let moviesHistory = []  //referenced in line 107


>>>>>>> af18ad6ab5253a6d6f5280828a707c0c7f6da7d3

// Function to set movies from MoviesHistory array into local storage
function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(moviesHistory));
}

// Function to render buttons based on what is in moviesHistory array
function renderButtons() {
    $(".buttons-view").empty();
    for (let i = 0; i < moviesHistory.length; i++) {
        const a = $("<button>");
        a.addClass("btn btn-danger movie-btn");
        a.attr("data-Title", moviesHistory[i]);
        a.text(moviesHistory[i]);
        $(".buttons-view").prepend(a);
    }
}

// Function to display movie info
<<<<<<< HEAD
function displayMovieInfo() {
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    $.ajax({
            url: queryURL,
            method: "GET",
        })
        .then(function(response) {
            $(".search-data").html("");

            var movieDiv = $("<div class='movie'>");
            movieDiv.html("<h4>You Want to Review</h4><br>");
            searchText.prepend(movieDiv);
=======
function displayMovieInfo(movieTitle) {
        
   const queryURL = '/api/search/' + movieTitle; 


    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function (response) {
            $(".search-data").html("")

            const movieDiv = $("<div class='movie'>")
            movieDiv.html("<h4>You Want to Review</h4><br>")
            searchText.prepend(movieDiv)
>>>>>>> af18ad6ab5253a6d6f5280828a707c0c7f6da7d3

            const imgURL = response.Poster;
            const image = $("<img class='poster'>").attr("src", imgURL);
            movieDiv.append(image);
<<<<<<< HEAD

            var title = response.Title;
            var pOne = $("<h2>").text(title);
=======
          
            const title = response.Title;
            const pOne = $("<h2>").text(title);
>>>>>>> af18ad6ab5253a6d6f5280828a707c0c7f6da7d3

            const genre = response.Genre;
            const pTwo = $("<p>").text("Genre: " + genre);
            movieDiv.append(pOne);
            const plot = response.Plot;
            const pThree = $("<p>").text("Plot: " + plot);
            movieDiv.append(pTwo);
            const director = response.Director;
            const pFour = $("<p>").text("Director: " + director);
            movieDiv.append(pThree);
            const actors = response.Actors;
            const pFive = $("<p>").text("Actors: " + actors);
            movieDiv.append(pFour);
            const year = response.Year;
            const pSix = $("<p>").text("Year: " + year);
            movieDiv.append(pFive);

            if (moviesHistory.includes(response.Title) === false) {
                moviesHistory.push(response.Title);
            }
<<<<<<< HEAD

            renderButtons();
            saveMovies();
        })
        .then((response) => {
            if ((response.length = 0))
                fetch("/api/movies", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(review),
                });
=======
            
            renderButtons()
            saveMovies()
>>>>>>> af18ad6ab5253a6d6f5280828a707c0c7f6da7d3
        })
        .catch((error) => {
            console.error("Error:", error);
        });
<<<<<<< HEAD
}

//On click event listener for search button
$("#run-search").on("click", function() {
    movie = $("#search-term").val();
    displayMovieInfo();
});

//On click event listener for movie buttons
$(document).on("click", ".movie-btn", function myFunction() {
    location.replace("/addreview");
});
=======

//On click event listener for search button
$("#run-search").on("click", function () {
    const movie = $("#search-term").val()
    displayMovieInfo(movie)

})

//On click event listener for movie buttons
$(document).on("click", ".movie-btn", function () {
    const movie = $(this).attr("data-Title");
    displayMovieInfo() // TODO: should navigate to the reviews page with the selected movie
>>>>>>> af18ad6ab5253a6d6f5280828a707c0c7f6da7d3


//On click event listener for clear search results button
$("#clear-search").on("click", function() {
    localStorage.clear("movies");
    moviesHistory = [];
    $(".buttons-view").empty();
    //refresh page
    location.reload();
});

//To run when document loads (if/else statement that will pull from local storage only if the value is not "null")
$(document).ready(function() {
<<<<<<< HEAD
    if (localStorage.getItem("movies") !== null) {
        var savedMovie = localStorage.getItem("movies");
        var pushMovies = JSON.parse(savedMovie);
        moviesHistory = moviesHistory.concat(pushMovies);
    }

    //render buttons
    renderButtons();
});
=======
    if(localStorage.getItem("movies") !== null) {
        const savedMovie = localStorage.getItem("movies");
        const pushMovies = JSON.parse(savedMovie)
        moviesHistory = moviesHistory.concat(pushMovies)
    }

    //render buttons
    renderButtons()
  
});
}
>>>>>>> af18ad6ab5253a6d6f5280828a707c0c7f6da7d3
