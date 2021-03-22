// Wait for the DOM to completely load before we run our JS
document.addEventListener("DOMContentLoaded", (e) => {
  if (e) {
    console.log("DOM loaded! 🚀");
  }

  const blogContainer = document.querySelector(".blog-container");
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

  // Function to help construct the post HTML content inside blogContainer
  const initializeRows = () => {
    blogContainer.innerHTML = "";
    const postsToAdd = [];

    posts.forEach((post) => postsToAdd.push(createNewRow(post)));
    postsToAdd.forEach((post) => blogContainer.appendChild(post));
  };

  const createNewRow = (post) => {
    // Postcard div
    const newPostCard = document.createElement("div");
    newPostCard.classList.add("card");

    // Heading
    const newPostCardHeading = document.createElement("div");
    newPostCardHeading.classList.add("card-header");

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete", "btn", "btn-danger");
    deleteBtn.addEventListener("click", handlePostDelete);

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "EDIT";
    editBtn.classList.add("delete", "btn", "btn-danger");
    editBtn.addEventListener("click", handlePostEdit);

    // New post info
    const newPostTitle = document.createElement("h2");
    const newPostDate = document.createElement("small");
    const newPostRating = document.createElement("h5");
    const newPostAuthor = document.createElement("p");

    // New post source
    const newPostSource = document.createElement("h5");
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
    newPostRating.textContent = post.rating;
    newPostAuthor.textContent = post.author;

    const formattedDate = new Date(post.createdAt).toLocaleDateString();
    newPostDate.textContent = ` (${formattedDate})`;

    newPostTitle.appendChild(newPostDate);
    newPostCardHeading.appendChild(deleteBtn);
    newPostCardHeading.appendChild(editBtn);
    newPostCardHeading.appendChild(newPostTitle);
    newPostCardHeading.appendChild(newPostSource);
    newPostCardHeading.appendChild(newPostDate);
    newPostCardBody.appendChild(newPostRating);
    newPostCardBody.appendChild(newPostBody);
    newPostCardBody.appendChild(newPostAuthor);
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
    window.location.href = `/cms?post_id=${currentPost.id}`;
  };

  const displayEmpty = () => {
    blogContainer.innerHTML = "";
    const messageH2 = document.createElement("h4");
    messageH2.style.textAlign = "center";
    messageH2.style.marginTop = "50px";
    messageH2.innerHTML = `No posts yet for this source. <br>Click <a href="/cms">here</a> to make a new post.`;
    blogContainer.appendChild(messageH2);
  };

  const handleSourceChange = (e) => {
    const newPostSource = e.target.value;
    console.log("handleSourceChange -> newPostSource", newPostSource);
    getPosts(newPostSource.toLowerCase());
  };
  postSourceSelect.addEventListener("change", handleSourceChange);
});
