import React from 'react';

import Logo from './img/footer.png';

import './Footer.css';

function Footer()
{
    return(
        <footer className="footer">
        <div className="footer-area">
            <div className="footer-logo">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="footer-container">
                <div className="f1">
                    <h2>PRODUCT</h2>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Team</a></li>
                    <li><a href="/">Carears</a></li>
                    <li><a href="/">Blog</a></li>
                </div>

                <div className="f1">
                    <h2>SUPPORT</h2>
                    <li><a href="/">How it works</a></li>
                    <li><a href="/">Trust & Safety</a></li>
                    <li><a href="/">Help Center</a></li>
                </div>

                <div className="f1">
                    <h2>DISCOVER</h2>
                    <li><a href="/">Plus Works</a></li>
                    <li><a href="/">Academy</a></li>
                </div>

                <div className="f1">
                    <h2>RESOURCE</h2>
                    <li><a href="/">Customer Stories</a></li>
                    <li><a href="/">Business Cost Calculator</a></li>
                    <li><a href="/">Startup Cities</a></li>
                </div>

                <div className="f1">
                    <h2>BROWSE</h2>
                    <li><a href="/">Freelance Services</a></li>
                    <li><a href="/">Freelnce Services By Country</a></li>
                    <li><a href="/">Freelance Skills</a></li>
                </div>

            </div>

            <div className="footer-icons">

                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-instagram"></i>

            </div>

        </div>

        <ul className="terms">
            <li><a href="/"><small>Terms</small></a></li>
            <li><a href="/"><small>Privacy</small></a></li>
            <li><small><i className="far fa-copyright"></i>2021 People Per Hour Ltd</small></li>
        </ul>

    </footer>
    );
}

export default Footer;