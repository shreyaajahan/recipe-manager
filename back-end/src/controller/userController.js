const userService = require("../service/UserService");
const {successResponse, failureResponse} = require("../utils/ResponseUtil")


module.exports.register=async(req,res)=>{
    try{
        const {
            firstName,lastName,age,email,password}=req.body; //req.body is writtem to extract only the necessary fields from the payload that has been sent
        await userService.register(firstName,lastName,age,email,password)
        successResponse(res,"new user got created",null,201);
    } catch (error) {
        console.log(error);
        failureResponse(res,error.message,401);
    }
};

module.exports.login = async(req,res)=>{
    try{

    } catch(error) {

    }
}
