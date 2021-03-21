
var app = connect().use(connect.static(__dirname + '/public'));
// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', (e) => {
  if (e) {
    console.log('DOM loaded! 🚀');
  }

  const blogContainer = document.querySelector('.movie-container');
  const postMovieTitle = document.getElementById('title');

  let reviews;

  // Function to grab movie from review database
  const getReview = (id) => {
    let idString = id || '';
    if (idString) {
      idString = idString.replace(' ', '');
      idString = `movie_id/${idString}`;
    }

    fetch(`/api/reviews/${idString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success in getting reviews:', data);
        posts = data;

        if (!posts.length) {
          displayEmpty();
        } else {
          initializeRows();
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  // Function to make DELETE request for a review
  const deletePost = (id) => {
    fetch(`/api/reviews/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => getReview(postMovieTitle.value));
  };

  // Getting initial list of posts
  getReview();

  // Function to help construct the post HTML content inside blogContainer
  const initializeRows = () => {
    blogContainer.innerHTML = '';
    const postsToAdd = [];

    posts.forEach((post) => postsToAdd.push(createNewRow(post)));
    postsToAdd.forEach((post) => blogContainer.appendChild(post));
  };

  const createNewRow = (post) => {
    // Postcard div
    const newPostCard = document.createElement('div');
    newPostCard.classList.add('card');

    // Heading
    const newPostCardHeading = document.createElement('div');
    newPostCardHeading.classList.add('card-header');

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete', 'btn', 'btn-danger');
    deleteBtn.addEventListener('click', handlePostDelete);

    // New post info
    const newPostTitle = document.createElement('h2');
    const newPostDate = document.createElement('small');

    // New post card body
    const newPostCardBody = document.createElement('div');
    newPostCardBody.classList.add('card-body');

    // New Post
    const newPostBody = document.createElement('p');
    newPostReview.textContent = post.review;
    newPostRating.textContent = post.rating;

    // const formattedDate = new Date(post.createdAt).toLocaleDateString();
    // newPostDate.textContent = ` (${formattedDate})`;

    newPostTitle.appendChild(newPostDate);
    newPostCardHeading.appendChild(deleteBtn);
    newPostCardHeading.appendChild(editBtn);
    newPostCardHeading.appendChild(newPostTitle);
    newPostCardHeading.appendChild(newPostCategory);
    newPostCardBody.appendChild(newPostBody);
    newPostCard.appendChild(newPostCardHeading);
    newPostCard.appendChild(newPostCardBody);
    newPostCard.setAttribute('data-post', JSON.stringify(post));

    return newPostCard;
  };

  const handlePostDelete = (e) => {
    const currentPost = JSON.parse(
      e.target.parentElement.parentElement.dataset.post
    );
    console.log('handlePostDelete -> currentPost', currentPost);
    deletePost(currentPost.id);
  };


  const displayEmpty = () => {
    blogContainer.innerHTML = '';
    const messageH2 = document.createElement('h4');
    messageH2.style.textAlign = 'center';
    messageH2.style.marginTop = '50px';
    messageH2.innerHTML = `No Movie reviews yet. <br>Click <a href="index.html">here</a> to select a Movie.`;
    blogContainer.appendChild(messageH2);
  };

  const review = document.getElementById('review');
  const rating = document.getElementById('rating');
  const submitForm = document.getElementById('submit');

  // Create a newPost object to send off to the backend
  const newReview = {
    review: review.value.trim(),
    rating: rating.value.trim(),
  };
  console.log('handleFormSubmit -> newReview', newReview);


const handleFormSubmit = (e) => {
  e.preventDefault();
  if (!review.value || !rating.value) {
    alert('Your review is missing some content');
  }
  else {
    submitReview(newReview);
  }
};

  // Event listener for when the review is submitted
  submitForm.addEventListener('submit', handleFormSubmit);

  const submitReview = (post) => {
    fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success in submitting post:', data);
        window.location.href = '/review';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

});

