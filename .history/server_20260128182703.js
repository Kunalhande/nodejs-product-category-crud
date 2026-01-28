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

app.get("/category", (req,res)=>{
  db.query("SELECT * FROM Category", (e,r)=>res.json(r));
});

app.put("/category/:id",(req,res)=>{
  db.query("UPDATE Category SET CategoryName=? WHERE CategoryId=?",
  [req.body.CategoryName, req.params.id], ()=>res.send("Updated"));
});

app.delete("/category/:id",(req,res)=>{
  db.query("DELETE FROM Category WHERE CategoryId=?", [req.params.id],
  ()=>res.send("Deleted"));
});

// 👉 PRODUCT CRUD + PAGINATION

app.post("/product",(req,res)=>{
  db.query("INSERT INTO Product SET ?", req.body, ()=>res.send("Added"));
});

app.get("/product",(req,res)=>{

  let page = parseInt(req.query.page) || 1;
  let size = 10;
  let offset = (page-1)*size;

  let sql = `
  SELECT p.ProductId, p.ProductName,
         c.CategoryId, c.CategoryName
  FROM Product p
  JOIN Category c ON p.CategoryId=c.CategoryId
  LIMIT ? OFFSET ?
  `;

  db.query(sql,[size,offset],(e,r)=>res.json(r));
});

app.put("/product/:id",(req,res)=>{
  db.query("UPDATE Product SET ProductName=?, CategoryId=? WHERE ProductId=?",
  [req.body.ProductName, req.body.CategoryId, req.params.id],
  ()=>res.send("Updated"));
});

app.delete("/product/:id",(req,res)=>{
  db.query("DELETE FROM Product WHERE ProductId=?",[req.params.id],
  ()=>res.send("Deleted"));
});

app.listen(3000, ()=>console.log("Server running on 3000"));
