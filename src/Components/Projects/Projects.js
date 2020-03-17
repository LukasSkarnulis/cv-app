import React from "react";
import "./Projects.css";
import Image1 from "./Image1.jpg";
import Image2 from "./Image2.jpg";


class Projects extends React.Component {
    render() {
        return (
            <div>
                <div className="projects-text">
                <p>These React projects were part of Codecademy course and were made by following instructions.</p>
                </div>
            <div className="projects">
                <div className="card">
                    <h3>Jamming</h3><br />
                    <div>
                    <a target="_blank" href="https://lukasskarnulis.github.io/jammming/"><img className="card-image" src={Image1} /></a>
                    </div>
                <div className="description">
                    <p>A react music app, which uses Spotify API to produce results based on search input
                        and allows to create playlists, which can be added to Spotify account. Must 
                        be used twice, as the first use is the account authorization.
                    </p>
                </div>
                </div>
                <div className="card">
                    <h3>Ravenous</h3><br />
                    <div>
                    <a target="_blank" href="https://lukasskarnulis.github.io/ravenous/"><img className="card-image" src={Image2} /></a>
                    </div>
                    <div className ="description">
                        <p>A react app that displays the best or highest reviewed restaurants based on 
                            food and location, using Yelp API. Lithuania is not included in Yelp.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Projects