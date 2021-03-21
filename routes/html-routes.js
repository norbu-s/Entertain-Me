// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get('/', (req, res) => {
<<<<<<< HEAD
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

  app.get('/cms', (req, res) => {
    res.sendFile(path.join(__dirname, './public/review.html'));
=======

    res.sendFile(path.join(__dirname, './public/blog.html'));
  });

  app.get('/cms', (req, res) => {
    res.sendFile(path.join(__dirname, './public/cms.html'));

>>>>>>> c93590541ce34d8636b2d50c1b3c7d45a5fa90c7
  });

  // blog route loads blog.html
  app.get('/blog', (req, res) => {
<<<<<<< HEAD
    res.sendFile(path.join(__dirname, './public/index.html'));
=======

    res.sendFile(path.join(__dirname, './public/blog.html'));

>>>>>>> c93590541ce34d8636b2d50c1b3c7d45a5fa90c7
  });
};

