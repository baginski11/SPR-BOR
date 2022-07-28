import React, {useState, useEffect} from 'react';
import './pages.css'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Team from '../components/team/Team';
import image from '../images/header-backgrounds/teams.jpg'
import chlopcy_u12 from '../images/teams/chlopcy_12.jpg'
import chlopcy_u10 from '../images/teams/chlopcy_u10.jpg'
import akademia from '../images/teams/akademia.jpg'
import dziewczyny from '../images/teams/dziewczyny_u12.jpg'
import seniorzy from '../images/teams/seniorzy.jpg'
import oldboys from '../images/teams/oldboys.jpg'
import Spacing from '../components/spacing/Spacing';

export default function Teams(){

    const [spacing, setSpacing] = useState(96)

    const updateMedia = () => {
        if(window.innerWidth > 800){
            setSpacing(96)
        }
        else{
            setSpacing(48)
        }
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        updateMedia();
        return () => window.removeEventListener("resize", updateMedia);
      });

    return(
        <div className="team-wrapper">
            <Navbar />
            <Header 
                src={image}
                text="Drużyny"
                />
            <Spacing 
                height={spacing}
                />
            <div  className="youth-head">
                <h4>Drużyny naszego klubu występują w 4 różnych ligach. Od chłopców U12 aż do I ligi mężczyzn. Zespoły są prowadzone przez wyszkolonych trenerów z ogromem doświadczenia zarówno we współpracy z dziećmi jak i w drużynach seniorskich.</h4>
            </div>
            <Spacing 
                height={spacing}
                />
            <div className="teams-container">
                <div className="teams-inner">
                    <Team 
                        name="I liga mężczyzn"
                        imgSrc={seniorzy}
                        />
                    <Team 
                        name="Oldboys"
                        imgSrc={oldboys}
                        />
                </div>
                <div className="teams-inner">
                    <Team 
                        name="Chłopcy 2008/2009"
                        imgSrc={chlopcy_u12}
                        />
                    <Team 
                        name="Chłopcy 2010/2011"
                        imgSrc={chlopcy_u10}
                        />
                </div>
                <div className="teams-inner">
                    <Team 
                        name="Dziewczyny 2008/2009"
                        imgSrc={dziewczyny}
                        />
                    <Team 
                        name="Akademia Dobrego Ruchu JOYNEXT"
                        imgSrc={akademia}
                        />
                </div>
            </div>
            <Spacing 
                height={144}
                />
        
            <Footer />
        </div>

    )
}