import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { GoChevronLeft } from 'react-icons/go'
import BrowseLayout from '../../components/Layouts/BrowseLayout'

const Watch = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <BrowseLayout>
            <div
                onClick={() => navigate("/browse")}
                className='absolute top-20 left-6 hover:text-white transition-all cursor-pointer'
            >
                <GoChevronLeft size={44} />
            </div>
            <ReactPlayer
                url={"https://youtube.com/watch?v=" + id}
                width={"100%"}
                height={"100vh"}
                playing={true}
                muted={false}
                controls={false}
            />
        </BrowseLayout>
    )
}

export default Watch