import React from 'react';
import NavButton from '../buttons/NavButton'
import './Navbar.css';
import logos from '../../images/nav-logos.png'

export default function Navbar(props)
{
    return (
        <div className="nav-container">
            <div className="logos-container">
                <img src={logos} alt="spr, joynext, gmina, powiat"></img>
            </div>
            <div className="links-container">
            <NavButton
                value="Aktualności"
            />
            <NavButton
                value="Mecze"
            />
            <NavButton
                value="Zespół"
            />
            <NavButton
                value="Druzyny"
            />
            <NavButton
                value="Młodziez"
            />
            <NavButton
                value="Kibice"
            />
            </div>
        </div>
    )
}