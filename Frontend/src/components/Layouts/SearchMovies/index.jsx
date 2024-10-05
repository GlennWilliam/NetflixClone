import React from "react"
import { useAtom } from "jotai"
import { idMovieAtom, searchMoviesAtom } from "../../../jotai/atoms"
import { searchMovies } from "../../../utils/searchMovies"
import { useState, useEffect } from "react"
import MovieCard from "../../Modules/BrowsePage/MovieCard"
import EachUtils from "../../../utils/eachUtils"


const SearchMovies = () => {
    const [, setIdMovie] = useAtom(idMovieAtom)
    const [searchQuery] = useAtom(searchMoviesAtom)
    

    const [isHover, setIsHover] = useState(false)
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        if (searchQuery) {
            searchMovies({ query: searchQuery }).then(result => {
                
                setMovieList(result)
            }).finally(() => {
                setTimeout(() => {
                    
                }, 500)
            })
        }
    }, [searchQuery])

    return (
        <div className='grid grid-cols-4 p-8 mt-10 gap-4'>
            <EachUtils
                of={movieList}
                render={(item, index) => (
                    <div
                        className='h-72 mt-4'
                        key={index}
                        onMouseLeave={() => {
                            setIsHover(false)
                            setIdMovie(null)
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
    )
}

export default SearchMovies