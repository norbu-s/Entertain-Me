// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/cms', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/cms.html'));
  });

  // showreview route loads showreview.html
  app.get('/showreview', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/showreview.html'));
  });
};
