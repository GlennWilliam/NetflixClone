const { OK, ERR } = require('../utils/response.js');
const { User } = require('../models/index.models.js');

const GetFavoriteMovies = async (req, res) => {
    try {
        const { email, token } = req.params;
        const data = { email, token };
        return OK(res, 200, data, "GetFavoriteMovies Success");
    } catch (error) {
        return ERR(res, 500, "GetFavoriteMovies Failed");
    }
};

const AddFavoriteMovies = async (req, res) => {
    try{
        const {email, token, data} = req.body;
        const result = {email, token, data};
        return OK(res, 200, result, "AddFavoriteMovies Success");
    } catch (error){
        return ERR(res, 500, "AddFavoriteMovies Failed");
    }
}

const RemoveFavoriteMovies = async (req, res) => {
    try{
        const {email, token, data} = req.body;
        const result = {email, token, data};
        return OK(res, 200, result, "RemoveFavoriteMovies Success");
    } catch (error){
        return ERR(res, 500, "RemoveFavoriteMovies Failed");
    }
}

const SignInToken = async (req, res) => {
    try{
        const {email, token, data} = req.body;
        const user = new User({email, token});
        await user.save();
        const result = {email, token};
        return OK(res, 200, result, "SignInToken Success");
    } catch (error){
        return ERR(res, 500, "SignInToken Failed");
    }
}

module.exports = { GetFavoriteMovies, AddFavoriteMovies, RemoveFavoriteMovies, SignInToken };
