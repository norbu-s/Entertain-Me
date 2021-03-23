// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("DOM loaded! 🚀");

  // Check for query string and set flag, "updating", to false initially
  const url = window.location.search;
  let postId;
  let updating = false;

  // Get a specific post
  const getPostData = (id) => {
    fetch(`/api/posts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(`Success in grabbing post ${id}`, data);

          // Populate the form with the existing post
          titleInput.value = data.title;
          reviewInput.value = data.review;
          ratingInput.value = data.rating;
          authorInput.value = data.author;
          postSourceSelect.value = data.source;

          updating = true;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Extract the post ID from the URL
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId);
  }

  // Get elements from the page
  const reviewInput = document.getElementById("review");
  const titleInput = document.getElementById("title");
  const ratingInput = document.getElementById("rating");
  const authorInput = document.getElementById("author");
  const addreviewForm = document.getElementById("addreview");
  const postSourceSelect = document.getElementById("source");

  // Set default value for the source
  postSourceSelect.value = "Streaming";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !titleInput.value ||
      !reviewInput.value ||
      !authorInput.value ||
      !ratingInput.value
    ) {
      alert("Your post is missing some content");
    }

    // Set alerts where rating values are outside the fixed range

    if (ratingInput.value > 5) {
      alert("Your rating has to be between 1 and 5");
    }
    if (ratingInput.value < 1) {
      alert("Your rating has to be between 1 and 5");
    }
    // Create a newPost object to send off to the backend
    const newPost = {
      title: titleInput.value.trim(),
      review: reviewInput.value.trim(),
      rating: ratingInput.value.trim(),
      author: authorInput.value.trim(),
      source: postSourceSelect.value,
    };
    console.log("handleFormSubmit -> newPost", newPost);

    // Check if the user is updating or creating and preform said function
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    } else {
      submitPost(newPost);
    }
  };

  // Event listener for when the showreview is submitted
  addreviewForm.addEventListener("submit", handleFormSubmit);

  // Event handler for when a user submits a post
  const submitPost = (post) => {
    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success in submitting post:", data);
        window.location.href = "/showreview"; // may need to replace later
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Update a post and bring user to /showreview
  const updatePost = (post) => {
    fetch("/api/posts", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then(() => {
        console.log("Attempting update to post");
        window.location.href = "/showreview"; // may need to replace later
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
});
