// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  // Helper function for showing element
  const show = (el) => {
    el.style.display = "block";
  };

  const hide = (el) => {
    el.style.display = "none";
  };

  var movies =[];
  
    function displayMovieInfo() {
  
      var movie = $(this).attr("data-name");
      var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var movieDiv = $("<div class='movie'>");
        var rating = response.Rated;
        var pOne = $("<p>").text("Rating: " + rating);
        movieDiv.append(pOne);
        var released = response.Released;
        var pTwo = $("<p>").text("Released: " + released);
        movieDiv.append(pTwo);
        var plot = response.Plot;
        var pThree = $("<p>").text("Plot: " + plot);
        movieDiv.append(pThree);
        var imgURL = response.Poster;
        var image = $("<img>").attr("src", imgURL);
        movieDiv.append(image);
        $("#movies-view").prepend(movieDiv);
      })
    }


    // Function for displaying movie data
    function renderButtons() {
  
      // Deleting the movies prior to adding new movies
      // (this is necessary otherwise you will have repeat buttons)
      $("#buttons-view").empty();
  
      // Looping through the array of movies
      for (var i = 0; i < movies.length; i++) {
  
        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie-btn to our button
        a.addClass("movie-btn");
        // Adding a data-attribute
        a.attr("data-name", movies[i]);
        // Providing the initial button text
        a.text(movies[i]);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(a);
      }
    }
  
    // This function handles events where a movie button is clicked
    $("#add-movie").on("click", function(event) {
      event.preventDefault();
      // This line grabs the input from the textbox
      var movie = $("#movie-input").val().trim();
  
      // Adding movie from the textbox to our array
      movies.push(movie);
  
      // Calling renderButtons which handles the processing of our movie array
      renderButtons();
    });
  
    // Adding a click event listener to all elements with a class of "movie-btn"
    $(document).on("click", ".movie-btn", displayMovieInfo);
  
    // Calling the renderButtons function to display the initial buttons
    renderButtons();
  });