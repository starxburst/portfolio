import React from "react";
import '../styles/BackgroundVideo.css'
import video from '../assets/main-video.mp4'

const BackgroundVideo = () => {
    return (
        <div className="bg-cideo-container">
            <video autoPlay loop muted playsInline className="background-video" >
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
        
}

export default BackgroundVideo;