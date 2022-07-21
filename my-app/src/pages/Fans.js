import React from 'react';
import './pages.css';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Spacing from '../components/spacing/Spacing';
import image1 from '../images/fans/1.jpg';
import image2 from '../images/fans/2.jpg';
import image3 from '../images/fans/3.jpg';
import image4 from '../images/fans/4.jpg';
import image from '../images/header-backgrounds/fans.jpg';
import facebook from '../icons/facebook.svg';
import instagram from '../icons/instagram.svg'
import NewsListBig from '../components/news/NewsListBig';

export default function Fans() {
  return (
    <div className="team-wrapper">
        <Navbar />
        <Header 
             src={image}
             text="Kibice"
            />
        <Spacing 
            height={96}
            />
        <h2 className="fans-head-title">Nasi kibice jeżdzą z nami po całej Polsce i wspierają<br></br> wszystkie drużyny naszego klubu.</h2>
        <Spacing 
            height={96}
            />
        <div className="triple-image-container">
            <img src={image1} alt="fans"></img>
            <img src={image2} alt="fans"></img>
            <img src={image3} alt="fans"></img>
        </div>
        <Spacing 
            height={96}
            />
        <h2 className="fans-head-title">Ósmy zawodnik</h2>
        <Spacing 
            height={60}
            />
        <div class="fanpage-container">
            <img src={image4} alt="Fans"></img>
            <div className="fanpage-right-container">
                <p>Ósmy zawodnik SPR BÓR to fanpage prowadzony przez naszych kibiców. Na fanpage’u można znaleźć relacje z meczów róznych drużyn naszego klubu prowdzonych przez naszych kibiców.</p>
                <div className="link-container">
                    <img src={facebook} alt="facebook"></img>
                    <a href="https://github.com">Facebook</a>
                </div>
                <div className="link-container">
                    <img src={instagram} alt="instagram"></img>
                    <a href="https://github.com">Instagram</a>
                </div>
            </div>
        </div>
        <Spacing 
            height={192}
            />
        <NewsListBig />
        <Spacing 
            height={192}
            />
        <Footer />
    </div>
  );
}
