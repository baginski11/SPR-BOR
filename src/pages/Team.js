import React from 'react';
import './pages.css';
import Navbar from '../components/navbar/Navbar';
import image from '../images/header-backgrounds/team.jpg'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Position from '../components/player/Position';
import data from '../components/player/player-data'



export default function Team(){
    return(
        <div className="team-wrapper">
            <Navbar />
            <Header 
                src={image}
                text="Zespół"
                />
            <Position 
                positionName="Rozgrywający"
                data={data}
                />
            <Position 
                positionName="Bramkarze"
                data={data}
                />
            <Footer />
        </div>
    )
}