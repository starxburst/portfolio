import React, { useState, useEffect } from "react";
import '../styles/Main.css'
import Navbar from "./Navbar";
import Typewriter from 'typewriter-effect';

const Main = () => {
    const [opacity, setOpacity] = useState(1);
    const [currentScrollHeight, setCurrentScrollHeight] = useState(0);

    const changeOpacity = (e) => {

        /*console.log(window.scrollY);
        console.log(window.innerHeight);*/
        setOpacity(1-(window.scrollY / window.innerHeight)*3);
       
    }

    useEffect(() => {
        setCurrentScrollHeight(window.scrollY);
        console.log(currentScrollHeight);
        window.addEventListener('scroll', (e) => changeOpacity(e));
    },[])



    return (
        <div className="main-container" style={{opacity}}>
            <Navbar />
            <div className="typewriter-container">
                <h1 className="typewriter-wrapper-text"> Hello, I'm
                    <div className="typewriter-wrapper">>
                        <Typewriter 
                            options={{
                                strings: ['Web Developer', 'PC Gamer', 'From Hong Kong'],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: 'typewriter-wrapper',
                                cursorClassName: 'typewriter-cursor'
                            }}
                        />
                    </div>
                </h1>
                <h1 className="main-about glow">Passionate about designing web and interfaces</h1>
            </div>
        </div>
    )
}

export default Main;