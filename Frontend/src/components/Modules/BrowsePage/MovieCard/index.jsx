import react from "react"
import { useState } from "react"
import ReactPlayer from "react-player"
import { GoPlay, GoPlusCircle, GoChevronDown } from "react-icons/go"
import { useAtom } from "jotai"
import { idMovieAtom, isFetchingAtom, isOpenModalAtom } from "../../../../jotai/atoms"
import { motion } from "framer-motion"
import { DETAIL_VIDEO } from "../../../../constants/dummyVideo"
import { useEffect } from "react"
import { getVideoUrl } from "../../../../utils/getVideoUrl"
import Skeleton from "./Skeleton"


const MovieCard = ({ data, isHover, setIsHover }) => {
    const [idMovie, setIdMovie] = useAtom(idMovieAtom)
    const [, setIsOpenModal] = useAtom(isOpenModalAtom)
    const [isFetching] = useAtom(isFetchingAtom)

    const [videoUrl, setVideoUrl] = useState(null)

    useEffect(() => {
        if (idMovie && data) {
            getVideoUrl({ movie_id: data.id }).then(result => setVideoUrl(result))
        }
    }, [idMovie, data])

    if (isFetching) return <Skeleton />

    return (
        <>
            {isHover && idMovie === data.id ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0, ease: "easeInOut" }}
                    className='relative shadow-md cursor-pointer transition-all w-full'
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
                    <div className='h-auto p-2 bg-[#141414] flex flex-col gap-1.5'>
                        <section className='mt-1 flex justify-between'>
                            <div className='flex gap-2'>
                                <button onClick={() => navigate("/watch/" + videoUrl)}>
                                    <GoPlay size={32} />
                                </button>
                                <button>
                                    <GoPlusCircle size={32} />
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={() => setIsOpenModal(true)}
                                    className='rounded-full p-1 border'
                                >
                                    <GoChevronDown size={20} />
                                </button>
                            </div>
                        </section>
                        <section className='text-left'>
                            <h2 className='font-semibold'>{data.title}</h2>
                            <p className='text-green-400'>Popularity: {data.popularity}</p>
                        </section>
                    </div>
                </motion.div>
            ) :
                <img
                    onMouseEnter={() => {
                        setIsHover(true)
                        setIdMovie(data.id)
                    }}
                    src={`${import.meta.env.VITE_BASE_URL_TMDB_IMAGE}${data.poster_path}`}
                    className='w-full max-h-48 cursor-pointer'
                />
            }
        </>

    )
}

export default MovieCard