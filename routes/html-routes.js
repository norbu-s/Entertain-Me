// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const https = require("https");


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
