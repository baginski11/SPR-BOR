import './footer.css';
import React from 'react';
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
                    <li>Zespół</li>
                    <li>Młodzież</li>
                    <li>Mecze</li>
                    <li>Drużyny</li>
                    <li>Aktualności</li>
                </ul>
                <ul>
                    <li className="list-title">Social Media</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Ósmy zawodnik</li>
                    <li>TikTok</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
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