import React from 'react';
import './pages.css';
import Navbar from '../components/navbar/Navbar';
import image from '../images/header-backgrounds/youth.jpg'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Team from '../components/team/Team';
import chlopcy_u12 from '../images/teams/chlopcy_12.jpg'
import chlopcy_u10 from '../images/teams/chlopcy_u10.jpg'
import akademia from '../images/teams/akademia.jpg'
import dziewczyny from '../images/teams/dziewczyny_u12.jpg'
import Spacing from '../components/spacing/Spacing';



export default function Youth(){
    return(
        <div className="team-wrapper">
            <Navbar />
            <Header 
                src={image}
                text="Młodzież"
                />
            <Spacing 
                height={96}
                />
            <div  className="youth-head">
                <h4>Prowadzimy zajęcia dla dzieci z różnych grup wiekowych. Nasi wychowankowie rozjeżdżają się po Polsce ale także całym świecie mając w sercach nasz klub, nasze miasto i miłość do piłki ręcznej. </h4>
            </div>
            <Spacing 
                height={96}
                />
            <div className="teams-container">
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
            <div className="youth-outro-container">
                <h2>Chcesz zapisać swoje dziecko na zajęcia? <span style={{color: "#159A50"}}>Skontaktuj się z nami!</span></h2>
                <div className="youth-outro-inner">
                    <div className="youth-outro-signle">
                        <h4>Zajęcia z piłki ręcznej</h4>
                        <h6>+48 602 466 466</h6>
                        <h6>przemyslaw.baginski@sprbor.pl</h6>
                    </div>
                    <div className="youth-outro-signle">
                        <h4>Zajęcia ogólnorozwojowe</h4>
                        <h6>+48 602 466 466</h6>
                        <h6>przemyslaw.baginski@sprbor.pl</h6>
                    </div>
                </div>
            </div>
            <Spacing 
                height={144}
                />
            <Footer />
        </div>
    )
}