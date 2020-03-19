import React from "react";
import "./EdSkills.css";

class EdSkills extends React.Component {
    render() {
        return (
            <div className="edSkills">
                <div className="school">
                    <h3>Education</h3>
                    <p>Bachelor of <strong>New Media Language / Marketing</strong> – 2018<br /><br />
<strong>Kaunas University of Technology</strong> / Faculty of Social Sciences, Arts and Humanities
</p>
                </div>
                <div className="languages">
                    <h3>Languages</h3>
                    <ul className="languages-list">
                        <li>Lithuanian (native)</li>
                        <li>English (C1)</li>
                        <li>Spanish (B2)</li>
                    </ul>
                </div>
                <div className="programming">
                    <h3>Programming Basics</h3>
                    <ul className="programming-list">
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                    </ul>
                </div>
                <div className="media">
                    <h3>Media Creation</h3>
                    <ul className="media-list">
                        <li>Adobe Premiere</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe AfterEffects</li>
                        <li>Wordpress</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default EdSkills;