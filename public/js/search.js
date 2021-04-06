

var searchText = $(".search-data");
var moviesHistory = [];
let movie;






// Function to set movies from MoviesHistory array into local storage
function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(moviesHistory));
}



// Function to display movie info
let searchTitle;

function displayMovieInfo() {
    const queryURL = "/api/search/" + movie;
    $.ajax({
        url: queryURL,
        method: "GET",
    })


    .then(function(response) {
            $(".search-data").html("");
               
            if(response[0]) {
                searchTitle = response[0];
            } else {
                searchTitle = response;
            }

            const movieDiv = $("<div class='movie'>");
            movieDiv.html("<h4>You Want to Watch</h4><br>");
            searchText.prepend(movieDiv);

            const imgURL = searchTitle.Poster;
            const image = $("<img class='poster'>").attr("src", imgURL);
            movieDiv.append(image);

            const title = searchTitle.title;
            const pOne = $("<h2>").text(title);
            movieDiv.append(pOne);
            
            const genre = searchTitle.genre;
            const pTwo = $("<p>").text("Genre: " + genre);
            movieDiv.append(pTwo);
            const plot = searchTitle.plot;
            const pThree = $("<p>").text("Plot: " + plot);
            movieDiv.append(pThree);
            const director = searchTitle.director;
            const pFour = $("<p>").text("Director: " + director);
            movieDiv.append(pFour);
            const actors = searchTitle.actors;
            const pFive = $("<p>").text("Actors: " + actors);
            movieDiv.append(pFive);
            const year = searchTitle.year;
            const pSix = $("<p>").text("Year: " + year);
            movieDiv.append(pSix);


 
            if (moviesHistory.includes(searchTitle.title) === false) {
                moviesHistory.push(searchTitle.title);
            }



            renderButtons();
            saveMovies();
        })


        

        .catch((error) => {
            console.error("Error:", error);
        });
}

//On click event listener for search button
$("#run-search").on("click", function() {
    movie = $("#search-term").val();
    displayMovieInfo();
});



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
    if (localStorage.getItem("movies") !== null) {
        var savedMovie = localStorage.getItem("movies");
        var pushMovies = JSON.parse(savedMovie);
        moviesHistory = moviesHistory.concat(pushMovies);
    }

    //render buttons
    renderButtons();
});
