import React from "react";
import EachUtils from "../../utils/eachUtils";
import { LIST_VIDEO_RECOMMENDATION } from "../../constants/dummyVideo";
import { useState } from "react";
import { useAtom } from "jotai";
import { idMovieAtom } from "../../jotai/atoms";
import MovieCard from "../../components/Modules/BrowsePage/MovieCard";
import BrowseLayout from "../../components/Layouts/BrowseLayout";

const Favorite = () => {
    const [isHover, setIsHover] = useState(false)
    const [, setIdMovie] = useAtom(idMovieAtom)
  return (
    <BrowseLayout>
    <div className="mt-20 px-8 font-bold text-white text-2xl">
        <h3>My Favorite Movies</h3>
    </div>
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 px-8 py-8">
        <EachUtils
          of={LIST_VIDEO_RECOMMENDATION}
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
    </BrowseLayout>
  );
};

export default Favorite;
