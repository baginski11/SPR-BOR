import React from 'react';
import './pages.css';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import image from '../images/main-head.jpg';
import Footer from '../components/footer/Footer'
import Spacing from '../components/spacing/Spacing';
import NewsListBig from '../components/news/NewsListBig';


export default function SpecificNews(props){
    return (
        <div className="team-wrapper">
            <Navbar />
            <div className="specific-news-head">
                <Header 
                    src={image}
                    />
            </div>
            <Spacing 
                height={96}
                />
            <div className="specific-news-container">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
            <Spacing 
                height={144}
                />
            <NewsListBig/>
            <Spacing 
                height={144}
                />
            <Footer />
        </div>
    )
}