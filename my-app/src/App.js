import './App.css';
import Header from './components/header/Header';
import image from './images/main-head.jpg';
import Navbar from './components/navbar/Navbar';
import UpcomingMatches from './components/match/UpcomingMatches';


function App() {
  return (
    <div>
    <Navbar />
    <Header
      src={image}
      text="SPR BOR Oborniki Śląskie"
      />
    <UpcomingMatches />
    </div>
  );
}

export default App;
