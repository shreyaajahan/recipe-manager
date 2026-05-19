const mongoose = require("mongoose");
function connectDB()
{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("DB connected.");
    })
    .catch((err)=>{
        console.log("DB Connection failed");
    });
}
module.exports=connectDB;
