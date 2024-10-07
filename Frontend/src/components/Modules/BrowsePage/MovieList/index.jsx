import React, { useEffect } from 'react'
import { LIST_VIDEOS } from '../../../../constants/dummyVideo'
import { useState } from 'react'
import EachUtils from '../../../../utils/eachUtils'
import MovieCard from '../MovieCard'
import CarouselLayout from '../../../Layouts/CarouselLayout'
import { useAtom } from 'jotai'
import { idMovieAtom, isFetchingAtom } from '../../../../jotai/atoms'
import { getMoviesByType } from '../../../../utils/getMoviesByType'

const MovieList = ({ title, moviesType }) => {
    const [isHover, setIsHover] = useState(false)
    const [, setIdMovie] = useAtom(idMovieAtom)
    const [, setIsFetching] = useAtom(isFetchingAtom)

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        if (moviesType) {
            getMoviesByType({ moviesType }).then((result) => {
                setIsFetching(true)
                setMovieList(result)
            }).finally(() => {
                setTimeout(() => {
                    setIsFetching(false)
                }, 500)
            })
        }
    }, [moviesType])

    return (
        <section className='px-8 py-4'>
            <h3 className='text-white text-3xl font-semibold mb-2'>{title}</h3>
            <CarouselLayout>
                <EachUtils
                    of={movieList}
                    render={(item, index) => (
                        <div
                            className='carousel-item h-auto w-auto mt-4'
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
                                className='h-full w-full object-cover'
                            />
                        </div>
                    )}
                />
            </CarouselLayout>
        </section>
    )
}

export default MovieList