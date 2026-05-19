const dotenv = require("dotenv"); //TO LOAD ENV FILE
dotenv.config(); //LOADS THE ENV FILE & SHOULD BE IN THE FIRST LINE

const app=require("./src/app");
const connectDB = require("./src/config/dbConfig");

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server is running in PORT : ",PORT);
});