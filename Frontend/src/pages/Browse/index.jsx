import React from "react";
import BrowseLayout from "../../components/Layouts/BrowseLayout";
import Jumbotron from "../../components/Modules/BrowsePage/Jumbotron";
import MovieList from "../../components/Modules/BrowsePage/MovieList";

const index = () => {
  return <BrowseLayout>
    <Jumbotron />
    <MovieList />
    <MovieList />
    <MovieList />
  </BrowseLayout>;
};

export default index;
