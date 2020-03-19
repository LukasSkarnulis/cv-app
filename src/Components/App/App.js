import React from 'react';
import './App.css';
import NavBar from "../NavBar/NavBar";
import Header from "../Header/header";
import AboutMe from "../AboutMe/AboutMe";
import EdSkills from "../EdSkills/EdSkills";
import WorkExp from "../WorkExp/WorkExp";
import Projects from "../Projects/Projects";
import MobNavBar from "../MobNavBar/MobNavBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
class App extends React.Component {
  render() {
  return (
    <body>
    <BrowserRouter>
    <div id="app">
    <MobNavBar />
    <NavBar />
    <Header />
      <Switch>
    <Route exact path="/cv-app/" component={AboutMe} />
    <Route path="/edskills" component={EdSkills} />
    <Route path="/workexp" component={WorkExp} />
    <Route path="/projects" component={Projects} />
    </Switch>
    </div>
    </BrowserRouter>
    </body>
  );
  }
};

export default App;
