// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const https = require("https");

module.exports = async function (app) {
  app.get("/", (req, res) => {
    https
    .get("https://www.omdbapi.com/?t=&plot=short&apikey=trilogy", res => {
      let data ="";  
      console.log("res",res)  
      res.on("data", chunk => {
        data += chunk;
        console.log("chunk: ", chunk)
    });
  })
  res.on("end",()=> {
    let url = JSON.parse(data);
  });
}

// {
//   if (req.length > 0) {
//     res.redirect("/index");
//   }
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

module.exports = async function (app) {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });


  app.get("/reviewList", (req, res) => {
    if (req.reviewList) {
      res.redirect("/reviewList");
    }
    res.sendFile(path.join(__dirname, "../public/reviewList.html"));
  });
}
