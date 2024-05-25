const express = require('express');
const cors = require('cors');
const connection = require('./connection');
const userRouter = require('./routes/user');
const app = express();

connection("mongodb://127.0.0.1:27017/e-commerce");

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.get("/", (req,res)=>{
  return res.send("Hello");
})

app.use("/user",userRouter);

app.listen(5000,()=>console.log("Server is started"));