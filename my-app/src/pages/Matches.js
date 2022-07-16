import React from 'react';
import './pages.css';
import Navbar from '../components/navbar/Navbar';
import image from '../images/header-backgrounds/matches.jpg'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import NextLast from '../components/match/NextLast';
import MatchBig from '../components/match/MatchBig';

import teamHome from '../images/club-logos/167.jpg'
import teamAway from '../images/club-logos/4897.jpg'



export default function Matches(){
    return(
        <div className="team-wrapper">
            <Navbar />
            <Header 
                src={image}
                text="Mecze"
                />
            <div className="match-content-container">
                <NextLast />
                <MatchBig 
                    date="25/07/2002"
                    time="18:00"
                    teamHome = "SPR BOR"
                    teamAway = "SPR GOKIS"
                    teamHomeSrc={teamHome}
                    teamAwaySrc={teamAway}
                    teamHomeScore = "34"
                    teamAwayScore = "34"
                    teamHomePenalty = "4"
                    teamAwayPenalty = "2"
                    />
            </div>
            <Footer />
        </div>
    )
}