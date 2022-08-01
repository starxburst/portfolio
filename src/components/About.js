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
                                strings: ['> Welcome to my Portfolio. I graduated from Hong Kong Baptist University majoring in green energy science. I started my programming journey when I was 12 years old. I was obsessed with video games and put many times into them, CS and L4D2 are my favourites too. During that time, I touched the programming step by step. I could contribute to the community, and exchange ideas with other developers. Currently, I’m trying to become a full-stack Javascript developer. Web development allows me to demonstrate creativity, create eye-catching animation and styling in numerous ways, turning designs into high-quality code. After over a year of study, I am ready to contribute to the world in this new way.'],
                                autoStart: true,
                                loop: true,
                                delay: 20,
                                pauseFor: 10000000,
                                wrapperClassName: 'about-typewriter-wrapper',
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