import './App.css';
import Header from './components/header/Header';
import image from './images/main-head.jpg';
import Navbar from './components/navbar/Navbar';
import UpcomingMatches from './components/match/UpcomingMatches';
import NextLast from './components/match/NextLast';


function App() {
  return (
    <div>
    <Navbar />
    <Header
      src={image}
      text="SPR BOR Oborniki Śląskie"
      />
    <UpcomingMatches />
    <NextLast />
    </div>
  );
}

export default App;
