import { apiInstance } from "./apiInstance"

export const getMoviesRecommendation = async ( {movie_id }) => {
    try{
        const movies = await apiInstance.get("movie/" + movie_id + "recommendations")
        movies.data.results 
    } catch (error) {
        console.log(error)
    }   
}