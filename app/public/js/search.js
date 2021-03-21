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
  
  // Function to render the movie after getting data from our API
  const renderMovies = (data) => {
    if (data.length) {
      const statsEl = document.getElementById("stats");
      statsEl.innerHTML = "";
      show(statsEl);

      data.forEach(({ title, actors, genre, year, }, i) => {
        const moviesDiv = document.createElement("div");

        // Create the elements to show movie data
        const titleEl = document.createElement("h2");
        const actorsEl = document.createElement("h6");
        const genreEl = document.createElement("h6");
        const yearEl = document.createElement("h6");



        // Add text to the elements we just created
        titleEl.textContent = `${i + 1} ${title}`;
        actorsEl.textContent = `actors: ${actors}`;
        genreEl.textContent = `Genre: ${genre}`;
        yearEl.textContent = `Year: ${year}`;


        // Append stuff to the new div
        moviesDiv.appendChild(titleEl);
        moviesDiv.appendChild(actorsEl);
        moviesDiv.appendChild(genreEl);
        moviesDiv.appendChild(yearEl);

        statsEl.appendChild(moviesDiv);
      });


    }
  };

  // When a user clicks the search-btn
  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the searched movie value from the input field
    const searchedMovie = document.getElementById("movie-search").value.trim();

    // Preform GET request for the specific movie
    fetch(`/api/${searchedMovie}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Success in searching for ${searchedMovie}`, data);
        renderMovies(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});

//test//

