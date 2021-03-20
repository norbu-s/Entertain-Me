const path = require('path');

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // add route loads the add.html page, where users can enter new books to the db
  app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/review.html'));
  });

  // all route loads the all.html page, where all books in the db are displayed
//   app.get('/all', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/all.html'));
//   });

//   // short route loads the short.html page, where short books in the db are displayed
//   app.get('/short', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/short.html'));
//   });

//   // long route loads the long.html page, where long books in the db are displayed
//   app.get('/long', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/long.html'));
//   });
// };
































// Requiring path to so we can use relative routes to our HTML files
// const path = require("path");
// const https = require("https");

// module.exports = async function (app) {
//   app.get("/", (req, res) => {
//     https
//     .get("https://www.omdbapi.com/?t=&plot=short&apikey=trilogy", res => {
//       let data ="";  
//       console.log("res",res)  
//       res.on("data", chunk => {
//         data += chunk;
//         console.log("chunk: ", chunk)
//     });
//   })
//   res.on("end",()=> {
//     let url = JSON.parse(data);
//   });
// },


//   if (req.length > 0) {
//     res.redirect("/index");
//   }
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// module.exports = async function (app) {
//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
//   });


//   app.get("/reviewList", (req, res) => {
//     if (req.reviewList) {
//       res.redirect("/reviewList");
//     }
//     res.sendFile(path.join(__dirname, "../public/reviewList.html"));
//   });
// }
// }