import React, {useEffect, useState} from 'react';
import './pages.css';
import Navbar from '../components/navbar/Navbar';
import image from '../images/header-backgrounds/news.jpg'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import NewsHeadBig from '../components/news/NewsHeadBig';
import Spacing from '../components/spacing/Spacing'
import NewsListBig from '../components/news/NewsListBig';
import NewsListSmall from '../components/news/NewsListSmall'


export default function News(){
    const [isDesktop, setDesktop] = useState(window.innerWidth > 800);
    const [spacing, setSpacing] = useState(144)

    const updateMedia = () => {
        setDesktop(window.innerWidth > 800);
        if(window.innerWidth > 800){
            setSpacing(144)
        }
        else{
            setSpacing(72)
        }
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      });

    return(
        <div className="team-wrapper">
            <Navbar />
            <Header 
                src={image}
                text="Aktualności"
                />
            <Spacing
                height={spacing}
                />
            <NewsHeadBig 
                src={image}
                title="Wygrywamy z Kątami Wrocławskimi 34:29!"
                text="Po zaciętym meczu w hali przy ulicy Kownackiego zwyciężamy z liderem tabeli! Nasza drużyna pomimo gry w okrojonym składzie zaprezentowała się znakomicie. Po piętnastu minutach gry...  "
                />
            <Spacing
                height={144}
                />
            {/* <NewsListBig/> */}
            {isDesktop ? (
                <NewsListBig 
                    buttonText="Wczytaj więcej"
                    buttonFucntion="load"
                    />
            ) : (
                <div className="news-list-small-mobile">
                <NewsListSmall 
                    buttonText="Wczytaj więcej"
                    buttonFucntion="load"
                    />
                </div>
            )}
            <Spacing
                height={spacing}
                />
            <Footer />
        </div>
    )
}