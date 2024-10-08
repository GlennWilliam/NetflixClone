const {ERR} = require("./response");
const { User } = require("../models/index.models");

const checkToken = async (req, res, next) => {
    const email = req.params.email || req.body.email || req.query.email;
    const token = req.params.token || req.body.token || req.query.token;

    if(!email || !token) {
        return ERR(res, 400, "Email and token are required");
    }

    try {
        const user = await User.findOne({ email, token });
        
        if (!user) {
            return ERR(res, 401, "Unauthorized"); // Ensure this is called if the user is not found
        }
        req.user = user;
        next(); // Only call next if the user is valid
    } catch (error){
        return ERR(res, 500, "Error checking token");
    }
}

module.exports = { checkToken };