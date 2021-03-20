// // Set up MySQL connection.
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   // NOTE: Be sure to add your MySQL password here!
//   password: 'yourRootPassword',
//   database: 'entertainMedb',
// });

// // Make connection.
// connection.connect((err) => {
//   if (err) {
//     console.error(`error connecting: ${err.stack}`);
//     return;
//   }
//   console.log(`connected as id ${connection.threadId}`);
// });

// // Export connection for our ORM to use.
// module.exports = connection;

const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize(
  'entertain',
  'root',
  'yourRootPassword',
  {
    host: 'localhost',
    port: 8080,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

// Exports the connection for other files to use
module.exports = sequelize;