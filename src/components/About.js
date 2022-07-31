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
                                strings: ['Welcome to my Portfolio. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'],
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