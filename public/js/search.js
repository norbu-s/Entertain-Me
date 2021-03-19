// Helper function for showing element
const show = (el) => {
  el.style.display = 'block';
};

const hide = (el) => {
  el.style.display = 'none';
};

// Helper function to perform DELETE on a movie
const removeMovie = (e) => {
  const movieId = e.target.dataset.id;

  fetch(`/api/movie/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => {
    console.log('deleted movie');
    e.target.parentElement.remove();
  });
};

// Function to render the movie after getting data from our API
const renderMovies = (data) => {
  if (data.length) {
    const statsEl = document.getElementById('stats');
    statsEl.innerHTML = '';
    show(statsEl);

    data.forEach(({ title, author, genre, pages, id }, i) => {
      const moviesDiv = document.createElement('div');

      // Create the elements to show movie data
      const titleEl = document.createElement('h2');
      const actorEl = document.createElement('h6');
      const genreEl = document.createElement('h6');
      const yearEl = document.createElement('h6');

      // Create the delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete');
      deleteBtn.setAttribute('data-id', id);

      // Add text to the elements we just created
      titleEl.textContent = `${i + 1} ${title}`;
      actorEl.textContent = `Actor: ${actor}`;
      genreEl.textContent = `Genre: ${genre}`;
      yearEl.textContent = `Year: ${year}`;
      deleteBtn.textContent = 'DELETE MOVIE';

      // Append stuff to the new div
      moviesDiv.appendChild(titleEl);
      moviesDiv.appendChild(actorEl);
      moviesDiv.appendChild(genreEl);
      moviesDiv.appendChild(yearEl);
      moviesDiv.appendChild(deleteBtn);

      statsEl.appendChild(moviesDiv);
    });

    const deleteBtns = document.querySelectorAll('.delete');
    deleteBtns.forEach((button) => {
      button.addEventListener('click', removeMovie);
    });
  }
};

// When a user clicks the search-btn
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the searched movie value from the input field
  const searchedMovie = document.getElementById('movie-search').value.trim();

  // Preform GET request for the specific movie
  fetch(`/api/${searchedMovie}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Success in searching for ${searchedMovie}`, data);
      renderMovies(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});


