import React from 'react';
import './Info.css';
import emailIcon from '../img/logos/email.svg';
import linkedinLogo from '../img/logos/linkedin.png';

function Info() {
    return (
        <div className="info">
            <div className="info--image" />
            <div className="info--text">
                <h1>Pavel</h1>
                <h4>Frontend Developer</h4>
                <p>pavel.website</p>
            </div>
            <div className="info--buttons">
                <a href="mailto:mail@gmail.com">
                    <button className="info--button info--button--white">
                        <img src={emailIcon} width="15px"/>
                        <p>Email</p>
                    </button>
                </a>
                <a href="https://linkedin.com">
                    <button className="info--button info--button-blue">
                        <img src={linkedinLogo} width="15px"/>
                        <p>LinkedIn</p>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Info;