const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",  // your MySQL password
  database: "machine_test"
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB Connection Failed");
    console.log(err);
  } else {
    console.log("✅ Database Connected Successfully!");
  }
});

module.exports = db;
