const express = require("express");
const db = require("./db");

const app = express();


// 👉 CATEGORY CRUD
app.get("/", (req,res)=>{
  res.send("Server OK 🚀");
});

app.post("/category", (req,res)=>{
  db.query("INSERT INTO Category SET ?", req.body, ()=>res.send("Added"));
});



app.listen(3000, ()=>console.log("Server running on 3000"));
