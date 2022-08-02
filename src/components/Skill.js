import React from "react";
import '../styles/Skill.css';
import Marquee from "react-fast-marquee";

const Skill = () => {
    return (
        <div className="skill-container">
            <Marquee
            gradient='false'
            pauseOnHover='true'
            gradientColor='[0, 0, 0]'
            speed='100'>
                <div className="skill-header"> React </div>
                <div className="skill-header"> HTML5 </div>
                <div className="skill-header"> CSS3 </div>
                <div className="skill-header"> JavaScript </div>
                <div className="skill-header"> Node.js </div>
                <div className="skill-header"> Express.js </div>
                <div className="skill-header"> MongoDB </div>
                <div className="skill-header"> MySQL </div>
                <div className="skill-header"> Material-UI </div>
                <div className="skill-header"> GitHub </div>
                <div className="skill-header"> Heroku </div>             
            </Marquee>
        </div>
    )
}

export default Skill;