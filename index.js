const express = require("express");

const app = express();

app.get("/hello",(req,res)=>{
  res.send("Hello DevOps Engineer");
});

app.listen(3000,()=>{
  console.log("Server running on port 3000");
});
