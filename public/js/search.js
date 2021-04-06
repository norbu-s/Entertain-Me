

var searchText = $(".search-data");
var moviesHistory = [];
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
        a.addClass("btn btn-success movie-btn");
        a.attr("data-title", moviesHistory[i]);
        a.text(moviesHistory[i]);
        $(".buttons-view").prepend(a);
         }
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

// Function to grab movies from the database
let title;

function getTitle() {
    const url = `/api/movies/${title}`;
    $.ajax({
            type: 'GET',
            url: url,
        })

        .then(function(response) {
          $(".search-data").html("");

          const movieDiv = $("<div class='movie'>");
          movieDiv.html("<h4>You Want to Watch</h4><br>");
          searchText.prepend(movieDiv);

          const imgURL = response.Poster;
          const image = $("<img class='poster'>").attr("src", imgURL);
          movieDiv.append(image);

          const title = response.title;
          const pOne = $("<h2>").text(title);
          movieDiv.append(pOne);
          
          const genre = response.genre;
          const pTwo = $("<p>").text("Genre: " + genre);
          movieDiv.append(pTwo);
          const plot = response.plot;
          const pThree = $("<p>").text("Plot: " + plot);
          movieDiv.append(pThree);
          const director = response.director;
          const pFour = $("<p>").text("Director: " + director);
          movieDiv.append(pFour);
          const actors = response.actors;
          const pFive = $("<p>").text("Actors: " + actors);
          movieDiv.append(pFive);
          const year = response.year;
          const pSix = $("<p>").text("Year: " + year);
          movieDiv.append(pSix);



        })

      
      };



//On click event listener for search button
$("#run-search").on("click", function() {
    movie = $("#search-term").val();
    displayMovieInfo();
});


//On click event listener for movie title button
$(document).on("click", ".movie-btn", function () {
    title = $(this).attr("data-title");
    getTitle()
  })

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
