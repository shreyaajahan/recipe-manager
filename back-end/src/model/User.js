const mongoose = require("mongoose");
const bcrypt=require("bcrypt.js");

const userSchema = new mongoose.Schema({
    name:
    {
        firstName:String,
        lastName:String,
        required:true
    },
    age:
    {
        type:Number,
        required:true,
        min:[5,"age should be greater than 5"]
    },
    email:
    {
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true
    },
});

userSchema.pre("save",async function(){
    if(!this.isModified("password")) return;
    const hashedPassword = await bcrypt.hash(this.password,10);
    this.password=hashedPassword;
});

//The function to validate the password 
userSchema.methods.validatePassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}

const User = mongoose.model("user",userSchema);
module.exports = User;
