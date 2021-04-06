var searchText = $(".search-data")
var moviesHistory = []
var movie


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
        a.attr("data-Title", moviesHistory[i]);
        a.text(moviesHistory[i]);
        $(".buttons-view").prepend(a);
    }
}




// Function to display movie info
function displayMovieInfo() {
   
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
            $(".search-data").html("")

            var movieDiv = $("<div class='movie'>")
            movieDiv.html("<h4>You Want to Review</h4><br>")
            searchText.prepend(movieDiv)

            var imgURL = response.Poster;
            var image = $("<img class='poster'>").attr("src", imgURL);
            movieDiv.append(image);
          
            var title = response.Title;
            var pOne = $("<h2>").text(title);
            movieDiv.append(pOne);

            var genre = response.Genre;
            var pTwo = $("<p>").text("Genre: " + genre);
            movieDiv.append(pTwo);
            var plot = response.Plot;
            var pThree = $("<p>").text("Plot: " + plot);
            movieDiv.append(pThree);
            var director = response.Director;
            var pFour = $("<p>").text("Director: " + director);
            movieDiv.append(pFour);
            var actors = response.Actors;
            var pFive = $("<p>").text("Actors: " + actors);
            movieDiv.append(pFive);
            var year = response.Year;
            var pSix = $("<p>").text("Year: " + year);
            movieDiv.append(pSix);
      
          
            if (moviesHistory.includes(response.Title) === false) {
                moviesHistory.push(response.Title)
            }
            
            renderButtons()
            saveMovies()
        }).then((response) => {
          if (response.length = 0)
          fetch('/api/movies', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
          })
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };



//On click event listener for search button
$("#run-search").on("click", function () {
    movie = $("#search-term").val()
    displayMovieInfo()

})

//On click event listener for movie buttons
$(document).on("click", ".movie-btn", function () {
    movie = $(this).attr("data-Title");
    displayMovieInfo()

})

//On click event listener for clear search results button
$("#clear-search").on("click", function (){
localStorage.clear("movies")
moviesHistory = []
$(".buttons-view").empty()
//refresh page
location.reload()
})




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
