import React from "react";
import "./header.css";
import Picture from "./cv-picture.png";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
            <img className="cv-picture" src={Picture} />
            <ul className="header-list">
                <li><span className="header-intro">Name: </span>Lukas Škarnulis</li>
                <li><span className="header-intro">Date of Birth: </span>1995/08/09</li>
                <li><span className="header-intro">Location: </span>Kaunas, Lithuania</li>
                <li><span className="header-intro">Phone: </span>+37061334709</li>
                <li><span className="header-intro">Email: </span>lukas.skarnulis1@gmail.com</li>
            </ul>
            </div>
        )
    }
}
export default Header;