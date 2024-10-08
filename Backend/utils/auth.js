const {ERR} = require("./response");
const { User } = require("../models/index.models");

const checkToken = async (req, res, next) => {
    const email = req.params.email || req.body.email;
    const token = req.params.token || req.body.token;

    if(!email || !token) {
        return ERR(res, 400, "Email and token are required");
    }

    try{
        const user = await User.findOne({email, token})
        if(!user){
            return ERR(res, 401, "Unauthorized");
        }
        req.user = user;
        next();
    } catch (error){
        return ERR(res, 500, "Error checking token");
    }
}

module.exports = { checkToken };