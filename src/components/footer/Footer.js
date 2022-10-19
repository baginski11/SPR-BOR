import './footer.css';
import React from 'react';
import {Link} from 'react-router-dom'
import sponsorzy from '../../images/sponsorzy.jpg'

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="sponsors-container">
                <img src={sponsorzy} alt="sponsorzy"/>
            </div>
            <div className="footer-links-container">
                <div className="footer-links-container-inner">
                <ul>
                    <li className="list-title">SPR BÓR Oborniki Śląskie</li>
                    <Link to="/zespol">Zespół</Link>
                    <Link to="/mlodziez">Młodzież</Link>
                    <Link to="/mecze">Mecze</Link>
                    <Link to="/druzyny">Drużyny</Link>
                </ul>
                <ul>
                    <li className="list-title">Social Media</li>
                    <a href="https://www.facebook.com/sprbor">Facebook</a>
                    <a href="https://www.instagram.com/spr_bor/">Instagram</a>
                    <a href="https://www.facebook.com/osmyzawodnik.sprbor.7">Ósmy zawodnik</a>
                    <a href="https://www.tiktok.com/@sprbor">TikTok</a>
                    <a href="https://twitter.com/sprborhandball">Twitter</a>
                    <a href="https://www.linkedin.com/company/stowarzyszenie-pilki-recznej-bor/">Linkedin</a>
                </ul>
                </div>
                <div className="footer-links-container-inner">
                <ul>
                    <li className="list-title">Język</li>
                    <li>Polski</li>
                    <li>English</li>
                </ul>
                <ul>
                    <li className="list-title">Kontakt</li>
                    <li>sprbor@sprbor.pl</li>
                    <li>+48 602 466 466</li>
                </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2022 SPR BÓR Oborniki Śląskie. All rights reserved.</p>
                <a href="facebook.com">Managment Tool</a>
            </div>
        </div>
    )
}