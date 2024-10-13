import { apiInstanceExpress } from "./apiInstance"

export const checkFavoriteMovies = async ({emailStorage, tokenStorage, idMovie}) => {
    try {
      const isFavorite = await apiInstanceExpress.post("/my-movies/check", {
        email: emailStorage,
        token: tokenStorage,
        movieID: idMovie
      })
      if(isFavorite.status == 200){
        return isFavorite.data.data.isFavorite
      }
      console.log(isFavorite)

    } catch (error) {
      console.log(error)
      return error
    }
  }