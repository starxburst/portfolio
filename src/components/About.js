import React, { useState, useEffect } from "react";
import '../styles/About.css'
import windowImg from '../assets/window.png'
import Typewriter from 'typewriter-effect';

const About = () => {

    const [elementVisible, setElementVisible] = useState(false);

    const reveal = (e) => {
        const target = document.getElementById("aboutContainer");
        const windowHeight = window.innerHeight;
        const elementTop = target.getBoundingClientRect().top;
        if (elementTop - windowHeight <= 0) {
            setElementVisible(true);
            console.log(elementVisible);
        } 
        console.log(elementTop);
        console.log(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('scroll', (e) => reveal(e));
    },[]);

    return (
        <div id="aboutContainer" className="about-container">
            <div className="about-header">
                <h1> About Me </h1>
            </div>
            <div className="about-content-container">
                <div className="window-container">       
                    <img className="window-image" src={windowImg} alt="window" />     
                    {elementVisible? (
                        <div className="about-typewriter-container">
                            <Typewriter
                            options={{
                                strings: ['Welcome to my Portfolio. Web DeveloperWeb DeveloperWeb DeveloperWeb DeveloperWeb DeveloperWeb DeveloperWeb DeveloperWeb DeveloperWeb DeveloperWeb DeveloperWeb DeveloperWeb DeveloperWeb Developer'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                pauseFor: 10000000,
                                wrapperClassName: 'typewriter-wrapper',
                                cursorClassName: 'typewriter-cursor'
                            }}
                            />
                        </div>
                    ):
                    null}
                </div>
            </div>
        </div>
    )
}

export default About;