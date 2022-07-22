import React, {useState, useEffect} from 'react';
import './pages.css';
import Navbar from '../components/navbar/Navbar';
import image from '../images/header-backgrounds/matches.jpg'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import NextLast from '../components/match/NextLast';

import axios from 'axios';
import UpcomingMatchesBig from '../components/match/UpcomingMatchesBig';
import PastMatches from '../components/match/PastMatches';
import Spacing from '../components/spacing/Spacing'





export default function Matches(){
    const [pastMatches, setPastMatches] = useState([])
    const [futureMatches, setFutureMatches] = useState([])




  useEffect(() => {

    async function fetchMatchesData() {
      const pastMatchesResponse = await axios.get('https://bor-rest-api.herokuapp.com/pastMatches')

      const pastMatchesResult = await pastMatchesResponse.data
      await setPastMatches(pastMatchesResult)

      const futureMatchesResponse = await axios.get('https://bor-rest-api.herokuapp.com/futureMatches')
      const futureMatchesResult = await futureMatchesResponse.data

      await setFutureMatches(futureMatchesResult)
      console.log(pastMatches)
    }

    fetchMatchesData();
  }, [])

    return(
        <div className="team-wrapper">
            <Navbar />
            <Header 
                src={image}
                text="Mecze"
                />
            <div className="match-content-container">
                <NextLast />
                <Spacing
                    height={96}
                    />
                  <UpcomingMatchesBig 
                  data={futureMatches}
                  />
                <Spacing
                    height={144}
                    />
                <PastMatches
                  data={pastMatches}
                  />
                  <Spacing
                    height={144}
                    />
            </div>
            <Footer />
        </div>
    )
}