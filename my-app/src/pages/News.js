import React from 'react';
import './pages.css';
import Navbar from '../components/navbar/Navbar';
import image from '../images/header-backgrounds/news.jpg'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import NewsHeadBig from '../components/news/NewsHeadBig';
import Spacing from '../components/spacing/Spacing'
import NewsListBig from '../components/news/NewsListBig';



export default function News(){


    return(
        <div className="team-wrapper">
            <Navbar />
            <Header 
                src={image}
                text="Aktualności"
                />
            <Spacing
                height={144}
                />
            <NewsHeadBig 
                src={image}
                title="Wygrywamy z Kątami Wrocławskimi 34:29!"
                text="Po zaciętym meczu w hali przy ulicy Kownackiego zwyciężamy z liderem tabeli! Nasza drużyna pomimo gry w okrojonym składzie zaprezentowała się znakomicie. Po piętnastu minutach gry...  "
                />
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