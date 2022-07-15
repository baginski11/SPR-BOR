import './pages.css';
import React from 'react';
import HeadBackground from '../components/header/HeadBackground';
import HeadTitle from '../components/header/HeadTitle';
import NextLast from '../components/match/NextLast';
import UpcomingMatches from '../components/match/UpcomingMatches';
import Navbar from '../components/navbar/Navbar';
import image from '../images/main-head.jpg';
import MainPageNews from '../components/news/MainPageNews';
import OtherPagesPanel from '../components/panel/OtherPagesPanel';
import Footer from '../components/footer/Footer';





export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="container">
          <HeadBackground 
            src={image}
            />
          <HeadTitle 
            text="SPR BOR Oborniki Śląskie"
            />
          <UpcomingMatches />
        <div className="content-container">
            <NextLast />
            <MainPageNews />
            <OtherPagesPanel />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
