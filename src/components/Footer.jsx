import React from 'react';
import './Footer.css';
import twitterLogo from '../img/logos/twitter.png';
import facebookLogo from '../img/logos/facebook.png';
import instagramLogo from '../img/logos/instagram.png';
import githubLogo from '../img/logos/github.png';

function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com">
                <img src={twitterLogo} />
            </a>
            <a href="https://facebook.com">
                <img src={facebookLogo} />
            </a>
            <a href="https://instagram.com">
                <img src={instagramLogo} />
            </a>
            <a href="https://github.com">
                <img src={githubLogo} />
            </a>
        </div>
    );
}

export default Footer;