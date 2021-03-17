
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

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // All data comes from the input fields
  const newReview = {
    review: document.getElementById('review').value.trim(),
    rating: document.getElementById('rating').value.trim(),
  };

  // Send POST request using the fetch API
  fetch('/api/review-list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newReview),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success in adding review:', data);
      alert(`Adding review: ${newReview.review}!`);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert(error);
    });

  // Dump the content of the input boxes
  document.getElementById('review').value = '';
  document.getElementById('rating').value = '';
});

  
  
  