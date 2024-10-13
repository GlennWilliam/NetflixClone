import react from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { GoPlay, GoPlusCircle, GoChevronDown, GoTrash } from "react-icons/go";
import { useAtom } from "jotai";
import {
  emailStorageAtom,
  idMovieAtom,
  isFavoriteAtom,
  isFetchingAtom,
  isOpenModalAtom,
  tokenAtom,
} from "../../../../jotai/atoms";
import { motion } from "framer-motion";
import { DETAIL_VIDEO } from "../../../../constants/dummyVideo";
import { useEffect } from "react";
import { getVideoUrl } from "../../../../utils/getVideoUrl";
import Skeleton from "./Skeleton";
import { useNavigate } from "react-router-dom";
import { LIST_VIDEO_RECOMMENDATION } from "../../../../constants/dummyVideo";
import { apiInstanceExpress } from "../../../../utils/apiInstance";
import Notifications from "../../Elements/notifications";
import { checkFavoriteMovies } from "../../../../utils/checkFavoriteMovies";

const MovieCard = ({ data, isHover, setIsHover }) => {
  const navigate = useNavigate();
  const [idMovie, setIdMovie] = useAtom(idMovieAtom);
  const [, setIsOpenModal] = useAtom(isOpenModalAtom);
  const [isFetching] = useAtom(isFetchingAtom);

  const [videoUrl, setVideoUrl] = useState(null);
  const [tokenStorage] = useAtom(tokenAtom);
  const [emailStorage] = useAtom(emailStorageAtom);
  const [isSubmit, setIsSubmit] = useState(false);
  const [NotifMessage, setNotifMessage] = useState(null);
  const [isFavorite, setIsFavorite] = useAtom(isFavoriteAtom);

  const handleAddFavoriteMovies = async () => {
    if (!emailStorage || !tokenStorage) return; // Ensure both storage values are present
  
    try {
      // Check if the movie is already a favorite
      if (!isFavorite) {
        // Call API to add the movie to favorites
        const addMovies = await apiInstanceExpress.post("/my-movies", {
          email: emailStorage,
          token: tokenStorage,
          data, // Send the movie data
        });
  
        if (addMovies.status === 201) {
          return alert(`Failed to add ${data.title}`);
        }
  
        // If successfully added, set notifications and states
        setIsSubmit(true); // Indicate form submission
        setNotifMessage(`${data.title} added to favorite movies`); // Set notification message
        setIsFavorite(true); // Update favorite state
  
        // Hide submission state and notification after a delay
        setTimeout(() => {
          setIsSubmit(false);
          setNotifMessage(null); // Clear notification message
        }, 3000);
      } else {
        // If movie is already a favorite, notify the user
        setNotifMessage(`${data.title} is already in your favorite movies`);
        setIsSubmit(true);
  
        setTimeout(() => {
          setIsSubmit(false);
          setNotifMessage(null); // Clear notification message
        }, 3000);
      }
    } catch (error) {
      // Handle API errors and show notifications
      setNotifMessage(`Error: ${error.message}`);
      setIsSubmit(true);
  
      setTimeout(() => {
        setIsSubmit(false);
        setNotifMessage(null); // Clear notification message
      }, 3000);
    }
  };

  const handleRemoveFavoriteMovies = async () => {
    if (!emailStorage || !tokenStorage) return; // Ensure both storage values are present

    try {
      // Call API to remove the movie from favorites
      const removeMovies = await apiInstanceExpress.delete("/my-movies", {
        data: {
          email: emailStorage,
          token: tokenStorage,
          movieID: data.id, // Send the movie ID
        },
      });

      if (removeMovies.status !== 204) {
        return alert(`Failed to remove ${data.title}`);
      }

      // If successfully removed, set notifications and states
      setIsSubmit(true); // Indicate form submission
      setNotifMessage(`${data.title} removed from favorite movies`); // Set notification message
      setIsFavorite(false); // Update favorite state

      // Hide submission state and notification after a delay
      setTimeout(() => {
        setIsSubmit(false);
        setNotifMessage(null); // Clear notification message
      }, 3000);
    } catch (error) {
      // Handle API errors and show notifications
      setNotifMessage(`Error: ${error.message}`);
      setIsSubmit(true);

      setTimeout(() => {
        setIsSubmit(false);
        setNotifMessage(null); // Clear notification message
      }, 3000);
    }
  }
  

  if (isFetching) return <Skeleton />;

  return (
    <>
      {isSubmit && NotifMessage && <Notifications message={NotifMessage} />}
      {isHover && idMovie === data.id ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0, ease: "easeInOut" }}
          className="relative shadow-md transition-all w-full"
        >
          <ReactPlayer
            url={`https://youtube.com/watch?v=${videoUrl}`}
            playing={true}
            loop={true}
            muted={true}
            width={"100%"}
            height={"180px"}
            controls={false}
          />
          <div className="h-auto p-2 bg-[#141414] flex flex-col gap-1.5">
            <section className="mt-1 flex justify-between">
              <div className="flex gap-2">
                <button onClick={() => navigate("/watch/" + videoUrl)}>
                  <GoPlay size={32} />
                </button>
                <button
                  onClick={isFavorite ? handleRemoveFavoriteMovies : handleAddFavoriteMovies}
                  className="hover:text-white transition-all"
                >
                  {isFavorite ? <GoTrash size={32}/> : <GoPlusCircle size={32} /> }
                </button>
              </div>
              <div>
                <button
                  onClick={() => setIsOpenModal(true)}
                  className="rounded-full p-1 border"
                >
                  <GoChevronDown size={20} />
                </button>
              </div>
            </section>
            <section className="text-left">
              <h2 className="font-semibold">{data.title}</h2>
              <p className="text-green-400">Popularity: {data.popularity}</p>
            </section>
          </div>
        </motion.div>
      ) : (
        <img
          onMouseEnter={() => {
            setIsHover(true);
            setIdMovie(data.id);
            getVideoUrl({ movie_id: data.id }).then((result) =>
              setVideoUrl(result)
            );
            checkFavoriteMovies({
              emailStorage,
              tokenStorage,
              idMovie: data.id,
            }).then((result) => setIsFavorite(result));
          }}
          src={`${import.meta.env.VITE_BASE_URL_TMDB_IMAGE}${data.poster_path}`}
          className="w-full max-h-48 cursor-pointer object-cover"
        />
      )}
    </>
  );
};

export default MovieCard;
