require("dotenv").config(); // MUST be first

const mysql = require("mysql2");

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_NAME:", process.env.DB_NAME);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log(" Database Connection Failed");
    console.log(err.message);
    return;
  }

  console.log(" MySQL Connected Successfully");
});

module.exports = db;