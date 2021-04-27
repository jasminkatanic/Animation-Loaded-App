import './App.scss';
import Home from './Home';
import About from './About';
import Education from "./Edu";
import Work from "./Work";
import Projects from "./Projects";
import Contact from "./Contact";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App">
        <div className="cont">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
