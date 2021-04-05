// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", (e) => {
  if (e) {
    console.log("DOM loaded! 🚀");
  }

  const showreviewContainer = document.querySelector(".showreview-container");
  const reviewSourceSelect = document.getElementById("source");

  let reviews;

  // Function to grab reviews from the database
  const getReviews = (source) => {
    let sourceString = source || "";
    if (sourceString) {
      sourceString = sourceString.replace(" ", "");
      sourceString = `source/${sourceString}`;
    }

    fetch(`/api/reviews/${sourceString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success in getting reviews:", data);
        reviews = data;

        if (!reviews.length) {
          displayEmpty();
        } else {
          initializeRows();
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  // Function to make DELETE request for a review
  const deleteReview = (id) => {
    fetch(`/api/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => getReviews(reviewSourceSelect.value));
  };

  // Getting initial list of reviews
  getReviews();

  // Function to help construct the review HTML content inside showreviewContainer
  const initializeRows = () => {
    showreviewContainer.innerHTML = "";
    const reviewsToAdd = [];

    reviews.forEach((review) => reviewsToAdd.push(createNewRow(review)));
    reviewsToAdd.forEach((review) => showreviewContainer.appendChild(review));
  };

  const createNewRow = (review) => {
    // Reviewcard div
    const newReviewCard = document.createElement("div");
    newReviewCard.classList.add("card");

    // Heading
    const newReviewCardHeading = document.createElement("div");
    newReviewCardHeading.classList.add("card-header");

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete", "btn", "btn-danger");
    deleteBtn.addEventListener("click", handleReviewDelete);

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "EDIT";
    editBtn.classList.add("delete", "btn", "btn-danger");
    editBtn.addEventListener("click", handleReviewEdit);

    // New review info
    const newReviewTitle = document.createElement("h2");
    const newReviewDate = document.createElement("small");
    const newReviewRating = document.createElement("h5");
    const newReviewAuthor = document.createElement("p");

    // New review source
    const newReviewSource = document.createElement("h5");
    newReviewSource.textContent = review.source;
    newReviewSource.style.float = "right";
    newReviewSource.style.fontWeight = "700";
    newReviewSource.style.marginTop = "-15px";

    // New review card body
    const newReviewCardBody = document.createElement("div");
    newReviewCardBody.classList.add("card-body");

    // New Review
    const newReviewBody = document.createElement("p");
    newReviewTitle.textContent = review.title;
    newReviewBody.textContent = review.review;
    newReviewRating.textContent = review.rating;
    newReviewAuthor.textContent = review.author;

  

    newReviewTitle.appendChild(newReviewDate);
    newReviewCardHeading.appendChild(deleteBtn);
    newReviewCardHeading.appendChild(editBtn);
    newReviewCardHeading.appendChild(newReviewTitle);
    newReviewCardHeading.appendChild(newReviewSource);
    newReviewCardHeading.appendChild(newReviewDate);
    newReviewCardBody.appendChild(newReviewRating);
    newReviewCardBody.appendChild(newReviewBody);
    newReviewCardBody.appendChild(newReviewAuthor);
    newReviewCard.appendChild(newReviewCardHeading);
    newReviewCard.appendChild(newReviewCardBody);
    newReviewCard.setAttribute("data-review", JSON.stringify(review));

    return newReviewCard;
  };

  const handleReviewDelete = (e) => {
    const currentReview = JSON.parse(
      e.target.parentElement.parentElement.dataset.review
    );
    console.log("handleReviewDelete -> currentReview", currentReview);
    deleteReview(currentReview.id);
  };

  const handleReviewEdit = (e) => {
    const currentReview = JSON.parse(
      e.target.parentElement.parentElement.dataset.review
    );
    console.log("handleReviewDelete -> currentReview", currentReview);
    window.location.href = `/addreview?review_id=${currentReview.id}`; // need to check later
  };

  const displayEmpty = () => {
    showreviewContainer.innerHTML = "";
    const messageH2 = document.createElement("h4");
    messageH2.style.textAlign = "center";
    messageH2.style.marginTop = "50px";
    messageH2.innerHTML = `No reviews yet for this source. <br>Click <a href="/addreview">here</a> to make a new review.`; // need to check later
    showreviewContainer.appendChild(messageH2);
  };

  const handleSourceChange = (e) => {
    const newReviewSource = e.target.value;
    console.log("handleSourceChange -> newReviewSource", newReviewSource);
    getReviews(newReviewSource.toLowerCase());
  };
  reviewSourceSelect.addEventListener("change", handleSourceChange);
});