import React, { useEffect } from "react";
import EachUtils from "../../utils/eachUtils";
import { LIST_VIDEO_RECOMMENDATION } from "../../constants/dummyVideo";
import { useState } from "react";
import { useAtom } from "jotai";
import { idMovieAtom } from "../../jotai/atoms";
import MovieCard from "../../components/Modules/BrowsePage/MovieCard";
import BrowseLayout from "../../components/Layouts/BrowseLayout";
import { emailStorageAtom, tokenAtom } from "../../jotai/atoms";
import { apiInstanceExpress } from "../../utils/apiInstance";
import Modal from "../../components/Modules/BrowsePage/Modal";

const Favorite = () => {
    const [isHover, setIsHover] = useState(false)
    const [idMovie, setIdMovie] = useAtom(idMovieAtom)
    const[emailStorage] = useAtom(emailStorageAtom)
    const [tokenStorage] = useAtom(tokenAtom)
    const [movieList, setMovieList] = useState([])  

    const getFavoriteMovies = async () => {
      try {
        const url = `my-movies/${emailStorage}/${tokenStorage}`
      const movies = await apiInstanceExpress.get(url)
      if(movies.status === 200) return movies.data
      } catch (error) {
        console.log(error)
        return error
      }
    
    }

    const checkFavoriteMovies = async () => {
      try {
        const isFavorite = await apiInstanceExpress.post("/my-movies/check", {
          email: emailStorage,
          token: tokenStorage,
          movieID: idMovie
        })
      } catch (error) {
        console.log(error)
        return error
      }
    }

    useEffect(() => {
      if(emailStorage && tokenStorage){
        getFavoriteMovies().then(result => setMovieList(result.data.favoriteMovies))
        checkFavoriteMovies()
      }
    }, [emailStorage, tokenStorage])

  return (
    <BrowseLayout>
    <div className="mt-20 px-8 font-bold text-white text-2xl">
        <h3>My Favorite Movies</h3>
    </div>
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 px-8 py-8">
        <EachUtils
          of={movieList}
          render={(item, index) => (
            <div
              className="h-72"
              key={index}
              onMouseLeave={() => {
                setIsHover(false);
                setIdMovie(null);
              }}
            >
              <MovieCard
                data={item}
                isHover={isHover}
                setIsHover={setIsHover}
              />
            </div>
          )}
        />
    </div>
    <Modal />
    </BrowseLayout>
  );
};

export default Favorite;
