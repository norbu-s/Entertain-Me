let searchText = $(".search-data")
let moviesHistory = []
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


//  //UPDATE THE BELOW FUNCTION TO PULL THE MOVIE TITLE FROM THE DB - SAVING REVIEW WORKS WITHOUT THIS
//   // Get a specific movie

let title;

function getTitle() {
    const url = `/api/movies/${title}`;
    $.ajax({
            type: 'GET',
            url: url,
        })
        .then((data) => {
            console.log("Success in getting movie:", data);
            title = data;
        });
}


//event listerner
$("btn btn-danger movie-btn").on("click", function() {
    title = $("#search-term").val()
    getTitle()

})

//On click event listener for movie buttons
$(document).on("click", ".movie-btn", function() {
    title = $(this).attr("data-title");
    getTitle();
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