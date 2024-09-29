import React from 'react'
import { useAtom } from 'jotai'
import { DETAIL_VIDEO } from '../../../../constants/dummyVideo'

const Modal = () => {
    const [isOpenModal, setIsOpenModal] = useAtom(isOpenModalAtom)

    return (
        <dialog className={`modal ${isOpenModal ? 'modal-open' : ''}`}>
            <div className='modal-box w-full max-w-screen-md p-0'>
                <div className='relative'>
                    <img src={DETAIL_VIDEO.image} className="w-full cursor-pointer" />
                    <button
                        onClick={() => setIsOpenModal(false)}
                        className='absolute top-2 right-2 rounded-full border p-1'
                    >
                        <MdClose size={24} />
                    </button>
                    <div className='absolute bottom-1/2 left-10'>
                        <h2 className='text-4xl font-black text-white'>{DETAIL_VIDEO.title}</h2>
                    </div>
                    <div className='absolute bottom-1/2 translate-y-14 left-10'>
                        <div className='flex gap-4'>
                            <button className="hover:text-slate-50">
                                <GoPlay size={32} /> 
                            </button>
                            <button className='text-slate-200 hover:text-white'>
                                <GoPlusCircle size={44} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-1 px-4 py-2 text-white'>
                    <div>
                        <div className='flex gap-2'>
                            <p>{movieDetail?.release_date}</p>
                            <p className='text-green-400/90'>{movieDetail?.runtime} Minutes</p>
                        </div>
                        <p className='mt-4'>{movieDetail?.overview}</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>Genre: {genreMapping(movieDetail?.genres)}</p>
                        <p>Popularity: {movieDetail?.popularity}</p>
                    </div>
                </div>
                <Recommendation />
            </div>
        </dialog>
    )
}

export default Modal