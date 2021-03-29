const moviesHistory = [];

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
function displayMovieTitle() {
    const queryURL = "/api/search/:title" + movieTitle;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).
    then(function(response) {
        const movieDiv = $("<div class='movie'>");
        if (moviesHistory.includes(response.Title) === false)
            .then((data) => {
                if (data) {
                    console.log(`Success in grabbing post ${id}`, data);

                    // Populate the form with the existing post
                    title.value = data.title;


                    updating = true;
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
})

if (url.indexOf("?movies_id=") !== -1) {
    moviesId = url.split("=")[1];
    getMovieTitle(moviesId);
}

//On click event listener for movie buttons
$(document).on("click", ".movie-btn", function() {
    const movie = $(this).attr("data-Title");
    displayMovieTitle();
});

//To run when document loads (if/else statement that will pull from local storage only if the value is not "null")
$(document).ready(function() {
    if (localStorage.getItem("movies") !== null) {
        const savedMovie = localStorage.getItem("movies");
        const pushMovies = JSON.parse(savedMovie);
        moviesHistory = moviesHistory.concat(pushMovies);
    }

    //render buttons
    renderButtons();
});

// const moviesHistory = [];
// const movie

// Function to render buttons based on what is in moviesHistory array
// function renderButtons() {
//     $(".buttons-view").empty();
//     for (let i = 0; i < moviesHistory.length; i++) {
//         const a = $("<button>");
//         a.addClass("btn btn-success movie-btn");
//         a.attr("data-Title", moviesHistory[i]);
//         a.text(moviesHistory[i]);
//         $(".buttons-view").prepend(a);
//     }
// }

// Function to display movie info

//On click event listener for movie buttons

// function displayMovieTitle() {

//     const renderTitle = (body, movies) => {
//         const section = document.createElement('section');
//         const domString = `
//           <p>
//             <strong>Post: </strong>${movies.title}
//           </p>
//         `;
//         section.innerHTML = domString;
//         body.appendChild(section);
//     };
//     renderButtons();
//     renderTitle();
// };

// On click event listener for movie buttons
// $(document).on("click", ".movie-btn", function() {
//     const movie = $(this).attr("data-Title");
//     displayMovieTitle()

// })

//To run when document loads (if/else statement that will pull from local storage only if the value is not "null")
// $(document).ready(function() {
//     if (localStorage.getItem("movies") != null) {
//         const savedMovie = localStorage.getItem("movies");
//         const pushMovies = JSON.parse(savedMovie)
//         moviesHistory = moviesHistory.concat(pushMovies)
//     }

//render buttons
//     renderButtons()
// })