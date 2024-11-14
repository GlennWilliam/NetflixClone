import React from "react";
import BrowseLayout from "../../components/Layouts/BrowseLayout";
import Jumbotron from "../../components/Modules/BrowsePage/Jumbotron";
import MovieList from "../../components/Modules/BrowsePage/MovieList";
import Modal from "../../components/Modules/BrowsePage/Modal";
import SearchMovies from "../../components/Layouts/SearchMovies";

import { useAtom } from "jotai";
import { searchMoviesAtom } from "../../jotai/atoms";

const Browse = () => {
  const [searchQuery] = useAtom(searchMoviesAtom);

  return (
      <BrowseLayout>
          {searchQuery ? <SearchMovies /> : (
              <>
                  <Jumbotron />
                  <MovieList title={"Now Playing"} moviesType={"now_playing"} />
                  <MovieList titxle={"Popular Movies"} moviesType={"popular"} />
                  <MovieList title={"Top Rated Movies"} moviesType={"top_rated"} />
              </>
          )}
          <Modal />
      </BrowseLayout>
  )
};

export default Browse;
