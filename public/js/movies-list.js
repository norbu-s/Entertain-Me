const moviesHistory = []
const movie

// Function to render buttons based on what is in moviesHistory array
function renderButtons() {
    $(".buttons-view").empty();
    for (let i = 0; i < moviesHistory.length; i++) {
        const a = $("<button>");
        a.addClass("btn btn-success movie-btn");
        a.attr("data-Title", moviesHistory[i]);
        a.text(moviesHistory[i]);
        $(".buttons-view").prepend(a);
    }
}

// Function to display movie info
<<<<<<< HEAD
=======
function displayMovieTitle() {
   
    const queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        const movieDiv = $("<div class='movie'>");
            if (moviesHistory.includes(response.Title) === false) {
                moviesHistory.push(response.Title)
            }
            
            renderButtons()

        })
};
>>>>>>> af18ad6ab5253a6d6f5280828a707c0c7f6da7d3

function displayMovieTitle() {

    const renderTitle = (body, movies) => {
        const section = document.createElement('section');
        const domString = `
          <p>
            <strong>Post: </strong>${movies.title}
          </p>
        `;
        section.innerHTML = domString;
        body.appendChild(section);
    };
    renderButtons();
    renderTitle();
};

//On click event listener for movie buttons
$(document).on("click", ".movie-btn", function() {
    movie = $(this).attr("data-Title");
    displayMovieTitle()

})


//To run when document loads (if/else statement that will pull from local storage only if the value is not "null")
$(document).ready(function() {
<<<<<<< HEAD
    if (localStorage.getItem("movies") !== null) {
        var savedMovie = localStorage.getItem("movies");
        var pushMovies = JSON.parse(savedMovie)
=======
    if(localStorage.getItem("movies") !== null) {
        const savedMovie = localStorage.getItem("movies");
        const pushMovies = JSON.parse(savedMovie)
>>>>>>> af18ad6ab5253a6d6f5280828a707c0c7f6da7d3
        moviesHistory = moviesHistory.concat(pushMovies)
    }

    //render buttons
    renderButtons()
})