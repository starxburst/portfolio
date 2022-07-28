import React from "react";
import '../styles/Main.css'
import Navbar from "./Navbar";
import video from '../assets/main-video.mp4'
import Typewriter from 'typewriter-effect';

const Main = () => {
    return (
        <div className="main-container">
            <video autoPlay loop muted playsInline className="background-video" >
                <source src={video} type="video/mp4" />
            </video>
            <Navbar />
            <div className="typewriter-container">

                <h1 className="typewriter-wrapper-text"> Hello, I'm
                    <div className="typewriter-wrapper">>
                        <Typewriter 
                            options={{
                                strings: ['A Self-Taught Web Developer', 'From Hong Kong'],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: 'typewriter-wrapper',
                                cursorClassName: 'typewriter-cursor'
                            }}
                        />
                    </div>
                </h1>
                <h1 className="main-about glow">I'm passionate about designing web and interfaces</h1>
            </div>
        </div>
    )
}

export default Main;