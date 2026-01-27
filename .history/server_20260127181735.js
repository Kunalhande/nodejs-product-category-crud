const express = require("express");
const db = require("./db");

const app = express();

console.log("🚀 Starting server...");

app.get("/test-db", (req, res) => {
  db.query("SELECT 1 + 1 AS result", (err, rows) => {
    if (err) {
      console.log("❌ Query error:", err);
      res.send("DB Query Failed");
    } else {
      res.send("DB Working ✅ Result = " + rows[0].result);
    }
  });
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
