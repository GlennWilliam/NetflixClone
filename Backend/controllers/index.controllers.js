const { OK, ERR } = require('../utils/response.js');
const { User } = require('../models/index.models.js');
const argon2 = require('argon2');

const GetFavoriteMovies = async (req, res) => {
    return OK(res, 200, req.user, "GetFavoriteMovies Success");
};

const AddFavoriteMovies = async (req, res) => {
    try{
        const { data } = req.body;
        const user = await User.findById(req.user._id);
        user.favoriteMovies.push(data);
        await user.save();   
        return OK(res, 200, user.favoriteMovies, "AddFavoriteMovies Success");
    } catch (error){
        return ERR(res, 500, "AddFavoriteMovies Failed");
    }
}

const RemoveFavoriteMovies = async (req, res) => {
    try{
        const { movieID } = req.body;
        const user = await User.findById(req.user._id);
        const existingMovie = user.favoriteMovies.some(movie => movie.id === movieID);

        if(!existingMovie){
            return ERR(res, 404, "Movie not found in favorites");
        }

        user.favoriteMovies = user.favoriteMovies.filter(movie => movie.id !== movieID);

        await user.save();
        return OK(res, 204, null, "RemoveFavoriteMovies Success");
    } catch (error){
        return ERR(res, 500, "RemoveFavoriteMovies Failed");
    }
}

const SignInToken = async (req, res) => {
    try{
        const {email, password, token } = req.body;
        const user = await User.findOne({email});
        if(!user){
            return ERR(res, 404, "User not found");
        }
        const isPasswordValid = await argon2.verify(user.password, password);
        if(!isPasswordValid){
            return ERR(res, 400, "Invalid password");
        }

        user.token = token;
        await user.save();
        return OK(res, 200, null, "SignInToken Success");
    } catch (error){
        return ERR(res, 500, "SignInToken Failed");
    }
}

const SignOutToken = async (req, res) => {
    const user = await User.findById(req.user._id);
    user.token = null;
    await user.save();
    return OK(res, 204, null, "SignOutToken Success");
}

const SignUpUser = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await argon2.hash(password);

    try{
        const user = await User.findOne({email});
        if(user){
            return ERR(res, 409, "User already exists");
        }
        const addNewUser = new User({email, password: hashedPassword});
        await addNewUser.save();
        return OK(res, 201, addNewUser._id, "SignUpUser Success");
    } catch (error){
        return ERR(res, 500, "SignUpUser Failed");
    }
}

module.exports = { GetFavoriteMovies, AddFavoriteMovies, RemoveFavoriteMovies, SignInToken, SignOutToken, SignUpUser };
