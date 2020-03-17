import React from "react";
import "./MobNavBar.css";
import {Link} from "react-router-dom";

class MobNavBar extends React.Component {
    render() {
        return (
            <div className="mobNavBar">
            <Link to="/" style={{ textDecoration: "none" }}><p className="mobNavBar-button">Me</p></Link>
            <Link to="/edskills" style={{ textDecoration: "none" }}><p className="mobNavBar-button">Ed</p></Link>
            <Link to="/workexp" style={{ textDecoration: "none" }}><p className="mobNavBar-button">Exp</p></Link>
            <Link to="/projects" style={{ textDecoration: "none" }}><p className="mobNavBar-button">Pro</p></Link>
            </div>
        )
    }
}
export default MobNavBar;