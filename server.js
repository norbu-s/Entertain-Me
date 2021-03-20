const express = require("express");
const Sequelize = require("sequelize"); //review page

//created connection to mySQL entertainMe (review page)
const path = "mysql://root:yourRootPassword@localhost:3306/entertainMedb";
const sequelize = new Sequelize(path, { operatorsAliases: 0 });

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  })
  .finally(() => {
    sequelize.close();
  });

// Requiring our models for syncing
const db = require("./app/models");

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("./routes"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

// Import routes and give the server access to them.
require("./app/routes/api-routes")(app);
require("./app/routes/api-routes")(app);

// app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
