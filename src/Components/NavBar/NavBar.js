import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
        <nav>
            <ul className="nav-list">
            <Link to="/" style={{ textDecoration: "none" }}><li className="nav-list-item">About Me</li></Link>
            <Link to="/edskills" style={{ textDecoration: "none" }}><li className="nav-list-item">Education and Skills</li></Link>
            <Link to="/workexp" style={{ textDecoration: "none" }}><li className="nav-list-item">Work Experience</li></Link>
            <Link to="/projects" style={{ textDecoration: "none" }}><li className="nav-list-item">Projects</li></Link>
            </ul>
        </nav>
        )
    }
}
export default NavBar;