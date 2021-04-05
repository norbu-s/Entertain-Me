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


//  //UPDATE THE BELOW FUNCTION TO PULL THE MOVIE TITLE FROM THE DB - SAVING REVIEW WORKS WITHOUT THIS
//   // Get a specific review
//   const getMovieTitle = (id) => {
//     fetch(`/api/movies/${id}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data) {
//           console.log(`Success in grabbing movie ${id}`, data);

//           // Populate the form with the existing movie title
//           titleInput.value = data.title;
 

//           updating = true;
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };





//function to pull movies from database

const getMovie = (title) => {
    fetch(`/api/movies/${title}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(`Success in grabbing movie ${title}`, data);
        };
    })
}




//On click event listener for movie buttons
$(document).on("click", ".movie-btn", function() {
    movie = $(this).attr("data-title");
    getMovie()

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