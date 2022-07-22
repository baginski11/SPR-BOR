import React, {useState} from 'react';
import NavButton from '../buttons/NavButton'
import './Navbar.css';
import logos from '../../images/nav-logos.png'
import hamburger from '../../icons/hamburger.svg'
import { Link } from 'react-router-dom';
import spr_logo from '../../images/spr-logo.svg'
import sponsors_logos from '../../images/sponsors-logos.png'

export default function Navbar(props)
{
    let closedOpen
    if(window.innerWidth > 600){
        closedOpen = "open"
    }
    else{
        closedOpen = "closed"
    }
    const[state, setState] = useState(closedOpen);
    function handleMenu(){
        if(state === "closed"){
            setState("open")
            document.getElementsByClassName('nav-container')[0].style.height = "calc(100vh - 20px)"
        }
        else{
            setState("closed")
            document.getElementsByClassName('nav-container')[0].style.height = "auto"
        }
    }

    return (
        <div className="nav-container">
            <div className="logos-container">
                <Link to="home" className="nav-logos-link">
                    <img className="nav-logos" src={logos} alt="spr, joynext, gmina, powiat"></img>
                </Link>
                <Link to="home">
                    <img className="spr-logo" src={spr_logo} alt="spr, joynext, gmina, powiat"></img>
                </Link>
                <img className="menu-button" onClick={handleMenu} style={{width: 32}} src={hamburger} alt="hamburger"></img>
            </div>
            {state === "open" && <div className="links-container">
                <NavButton
                    value="Aktualności"
                    link="/aktualnosci"
                />
                <NavButton
                    value="Mecze"
                    link="/mecze"
                />
                <NavButton
                    value="Zespół"
                    link="/zespol"
                />
                <NavButton
                    value="Drużyny"
                    link="/druzyny"
                />
                <NavButton
                    value="Młodzież"
                    link="/mlodziez"
                />
                <NavButton
                    value="Kibice"
                    link="/kibice"
                />
            </div>}
            {state === "open" && <img className="sponsors-logos" src={sponsors_logos} alt="Sponsorzy"></img>}
        </div>
    )
}