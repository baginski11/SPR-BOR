import './App.css';
import HeadBackground from './components/header/HeadBackground';
import HeadTitle from './components/header/HeadTitle';
import NextLast from './components/match/NextLast';
import UpcomingMatches from './components/match/UpcomingMatches';
import Navbar from './components/navbar/Navbar';
import image from './images/main-head.jpg';
import MainPageNews from './components/news/MainPageNews';



export default function App() {
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
          </div>
        </div>
      </div>
    </div>
  );
}
