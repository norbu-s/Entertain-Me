document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

const searchForm = document.querySelector('#home-form');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log("it's working")
  const userInput = document.querySelector("#search-movie-home").value
  fetch(`/api/searchmovies/${userInput}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
}).then((response) =>{
  if (response.length > 0) {
    console.log(response);
  } else{
    var movie = "";
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    fetch(`/api/searchmovies/${userInput}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }).then ((response) =>{
        if (response.length > 0)
          PUT
      //.then new api call to the server to add movie to db
      // display result
      // save to db
  });

