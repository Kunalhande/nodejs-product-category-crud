const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hk@12233",  
  database: "nimap_test"
});

db.connect(err => {
  if (err) throw err;
  console.log("DB Connected");
});

module.exports = db;
