import React from 'react'
import ReactPlayer from 'react-player'
import { JUMBOTRON_VIDEO } from '../../../../constants/dummyVideo'
import { useState } from 'react'
import { GoPlay, GoMute, GoUnmute } from 'react-icons/go'

const Jumbotron = () => {
    const [isMute, setIsMute] = useState(true)

    return (
        <div className='relative h-[60vw] w-full'>
            <ReactPlayer
                url={JUMBOTRON_VIDEO.videoURL}
                width={"100%"}
                height={"100%"}
                playing={true}
                muted={isMute}
                controls={false}
            />
            <div className='absolute top-1/2 -translate-y-1/2 left-0 p-8 max-w-md'>
                <div className='flex flex-col gap-4 text-white'>
                    <h1 className='text-5xl font-black'>{JUMBOTRON_VIDEO.title}</h1>
                    <p>{JUMBOTRON_VIDEO.desc}</p>
                </div>
                <div className='flex gap-4 mt-4'>
                    <button
                        className='bg-gray-200 py-2 px-8 rounded-md text-xl font-bold text-black flex items-center gap-1'
                    >
                        <GoPlay /> Play
                    </button>
                    <button
                        onClick={() => setIsOpenModal(true)}
                        className='bg-stone-600/80 py-2 px-8 rounded-md text-white'
                    >
                        More Detail
                    </button>
                </div>
            </div>
            <div className='absolute right-6 bottom-1/2 -translate-y-1/2 text-white'>
                <div
                    className='border rounded-full p-2 cursor-pointer'
                    onClick={() => setIsMute(!isMute)}
                >
                    {isMute ? <GoMute size={24} /> : <GoUnmute size={24} />}
                </div>
            </div>
        </div>
    )
}

export default Jumbotron