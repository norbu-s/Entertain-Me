// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", (e) => {
  if (e) {
    console.log("DOM loaded! 🚀");
  }

  const showreviewContainer = document.querySelector(".showreview-container");
  const postSourceSelect = document.getElementById("source");

  let posts;

  // Function to grab posts from the database
  const getPosts = (source) => {
    let sourceString = source || "";
    if (sourceString) {
      sourceString = sourceString.replace(" ", "");
      sourceString = `source/${sourceString}`;
    }

    fetch(`/api/posts/${sourceString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success in getting posts:", data);
        posts = data;

        if (!posts.length) {
          displayEmpty();
        } else {
          initializeRows();
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  // Function to make DELETE request for a post
  const deletePost = (id) => {
    fetch(`/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => getPosts(postSourceSelect.value));
  };

  // Getting initial list of posts
  getPosts();

  // Function to help construct the post HTML content inside showreviewContainer
  const initializeRows = () => {
    showreviewContainer.innerHTML = "";
    const postsToAdd = [];

    posts.forEach((post) => postsToAdd.push(createNewRow(post)));
    postsToAdd.forEach((post) => showreviewContainer.appendChild(post));
  };

  const createNewRow = (post) => {
    // Postcard div
    const newPostCard = document.createElement("div");
    newPostCard.classList.add("card");

    // Heading
    const newPostCardHeading = document.createElement("div");
    newPostCardHeading.classList.add("card-header");

    // Delete button
    const deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fas", "fa-trash");
    deleteBtn.addEventListener("click", handlePostDelete);

    // Edit button
    const editBtn = document.createElement("i");
    editBtn.classList.add("fas", "fa-edit");
    editBtn.addEventListener("click", handlePostEdit);


    // New post info
    const newPostTitle = document.createElement("h2");
    const newPostDate = document.createElement("small");
    const newPostRating = document.createElement("p");
    const newPostAuthor = document.createElement("p");

    // New post source
    const newPostSource = document.createElement("small");
    newPostSource.textContent = post.source;
    newPostSource.style.float = "right";
    newPostSource.style.fontWeight = "700";
    newPostSource.style.marginTop = "-15px";

    // New post card body
    const newPostCardBody = document.createElement("div");
    newPostCardBody.classList.add("card-body");

    // New Post
    const newPostBody = document.createElement("p");
    newPostTitle.textContent = post.title;
    newPostBody.textContent = post.review;
    newPostRating.textContent = "Rating: " + " " + post.rating;
    newPostAuthor.textContent = "Author: " + " " + post.author;

    const formattedDate = new Date(post.createdAt).toLocaleDateString();
    newPostDate.textContent = ` (${formattedDate})`;

    newPostTitle.appendChild(newPostDate);
    newPostCardHeading.appendChild(deleteBtn);
    newPostCardHeading.appendChild(editBtn);
    newPostCardHeading.appendChild(newPostTitle);
    newPostCardHeading.appendChild(newPostSource);
    // newPostCardHeading.appendChild(newPostDate);
    // newPostCardBody.appendChild(newPostRatingHead);
    newPostCardBody.appendChild(newPostBody);
    newPostCardBody.appendChild(newPostRating);
    newPostCardBody.appendChild(newPostAuthor);
    newPostCardBody.appendChild(newPostDate);
    newPostCard.appendChild(newPostCardHeading);
    newPostCard.appendChild(newPostCardBody);
    newPostCard.setAttribute("data-post", JSON.stringify(post));

    return newPostCard;
  };

  const handlePostDelete = (e) => {
    const currentPost = JSON.parse(
      e.target.parentElement.parentElement.dataset.post
    );
    console.log("handlePostDelete -> currentPost", currentPost);
    deletePost(currentPost.id);
  };

  const handlePostEdit = (e) => {
    const currentPost = JSON.parse(
      e.target.parentElement.parentElement.dataset.post
    );
    console.log("handlePostDelete -> currentPost", currentPost);
    window.location.href = `/addreview?post_id=${currentPost.id}`; // need to check later
  };

  const displayEmpty = () => {
    showreviewContainer.innerHTML = "";
    const messageH2 = document.createElement("h4");
    messageH2.style.textAlign = "center";
    messageH2.style.marginTop = "50px";
    messageH2.innerHTML = `No posts yet for this source. <br>Click <a href="/addreview">here</a> to make a new post.`; // need to check later
    showreviewContainer.appendChild(messageH2);
  };

  const handleSourceChange = (e) => {
    const newPostSource = e.target.value;
    console.log("handleSourceChange -> newPostSource", newPostSource);
    getPosts(newPostSource.toLowerCase());
  };
  postSourceSelect.addEventListener("change", handleSourceChange);
});
