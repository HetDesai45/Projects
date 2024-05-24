const express = require('express');
const connection = require('./connection');

const app = express();

connection("mongodb://127.0.0.1:27017/e-commerce");

app.get("/", (req,res)=>{
  return res.send("Hello");
})

app.listen(5000,()=>console.log("Server is started"));