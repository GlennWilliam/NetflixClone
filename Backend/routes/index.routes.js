const router = require("express").Router();
const UserController = require("../controllers/index.controllers");
const { checkToken } = require("../utils/auth");

router.get("/my-movies/:email/:token", checkToken, UserController.GetFavoriteMovies);
router.post("/my-movies", checkToken, UserController.AddFavoriteMovies);
router.delete("/my-movies", checkToken, UserController.RemoveFavoriteMovies);

router.post("/my-token", UserController.SignInToken);
router.delete("/my-token", checkToken, UserController.SignOutToken);

router.post("/sign-up", UserController.SignUpUser);

module.exports = router;
