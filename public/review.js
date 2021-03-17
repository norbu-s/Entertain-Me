  //Code for when page is loaded
  $(document).ready(function(){
    fetch("/api/review-list").then(function(response){
        if (response.length>0){
          displayMovieInfo(response)  
        }
    })
  }
  )


  // displayMovieInfo function re-renders the HTML to display the appropriate content
  function displayMovieInfo() {

    var movie = $(this).attr("data-name");
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy"; //update API KEY

    
      // Creating a div to hold the movie
      var movieDiv = $("<div class='movie'>");

            // Storing the plot
            var plot = response.Plot;

            // Creating an element to hold the plot
            var pThree = $("<p>").text("Plot: " + plot);
      
            // Appending the plot
            movieDiv.append(pThree);

            // Storing the release year
            var released = response.Released;

            // Creating an element to hold the release year
            var pTwo = $("<p>").text("Released: " + released);

            // Displaying the release year
            movieDiv.append(pTwo);

  }



// Adding a review 

$(function(){
    $("#form").submit(function(e){
        // Create data object
        var data = {};
        data.review = $("#review").val();
        // The url of your server-side script that handles the post submission
        var url = "";
        $.POST(url, data)
        .done(function(response){
            // This code executes when the server returns a response
            // Do something with the response like adding the comment to the current list of comments
            // Example (if your response is HTML, better would be a JSON string):
            $("#comments").append(response);
        });
        e.preventDefault();
    });
});
  
  
  


      // Storing the rating data
      var rating = response.Rated;

      // Creating an element to have the rating displayed
      var pOne = $("<p>").text("Rating: " + rating);

      // Displaying the rating
      movieDiv.append(pOne);






      // Putting the entire movie above the previous movies
      $("#movies-view").prepend(movieDiv);
    };

  

  // Function for displaying movie data
  function renderButtons() {

    // Delete function

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

