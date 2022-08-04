import React, { useState, useEffect } from "react";
import '../styles/About.css'
import Typewriter from 'typewriter-effect';

const About = () => {

    const [elementVisible, setElementVisible] = useState(false);

    const reveal = (e) => {
        const target = document.getElementById("aboutContainer");
        const windowHeight = window.innerHeight;
        const elementTop = target.getBoundingClientRect().top;
        if (elementTop - windowHeight < 0) {
            setElementVisible(true);
            console.log(elementVisible);
        } else {
            setElementVisible(false);
        }
        console.log(elementTop);
        console.log(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('scroll', (e) => reveal(e));
    },[]);

    return (
        <div id="aboutContainer" className="about-container gradient">
            <div className="about-content-container">
                <h1 className="about-header"> Hi. I'm Eric. Welcome to my portfolio </h1>
                {elementVisible? (
                    <h2 className="about-content-description">Many people asked me Why did you try to step into a field that is unrelated to my college major? And the answer is quite simple. Programming gives me satisfaction. As a self-taught web developer, I always keep pushing myself to explore any new technology. My journey isn’t over yet, with time I kept researching the current trends relevant in the field and started taking up online courses to expand the next project that I would build. The constant change and the opportunity to learn new aspects are really important for me. I have always found a certain satisfaction in programming and I knew I wanted to make a career in it.</h2>
                ):
                null}
    </div>
        </div>
    )
}

export default About;