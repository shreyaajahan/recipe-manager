const express = require("express");
const cors=require("cors");
const morgan=require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.static("public")); // whenever we type localhost alone it fetches the index.html file in public folder
app.use("/static",express.static("uploads"));
app.use(cors({origin:"*"}))
app.use(express.json());

app.use("/health",(req,res)=>{
    res.send("SERVER IS RUNNING HEALTHY")
})
module.exports=app;
