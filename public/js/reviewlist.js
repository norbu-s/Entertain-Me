let searchText = $(".search-data")
let moviesHistory = []
let movie;

// let formTitle = document.getElementById("search-data").defaultValue; 



// // Function to set movies from MoviesHistory array into local storage
// function saveMovies() {
//     localStorage.setItem("movies", JSON.stringify(moviesHistory));
// }



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



// //   // Get a specific movie
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
          searchText.prepend(movieDiv);
          const title = response.title;
          const pOne = $("<h2>").text(title);
          movieDiv.append(pOne);
          


        })
      };


    //   function populate(el) {
    //     document.getElementById('data-title').value= 
    //     document.getElementById(el.id).firstChild.nodeValue;
    //     }



//On click event listener for movie buttons
$(document).on("click", ".movie-btn", function() {
    title = $(this).attr("data-title");
    getTitle();
});

//On click event listener for clear the movie in the review form button
$("#clear-review").on("click", function() {
    $("data-title").empty();
    //refresh page
    location.reload();
});

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