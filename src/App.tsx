import React from 'react';
import {
  BrowserRouter as Router,
  Switch, // for server rendering
  Route,
} from "react-router-dom";
import logo from './logo.svg';
// import './App.css';
import "./App.scss";
import Home from './views/Home/home';
import Sidebar from './components/Sidebar/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";
import Page1 from './views/Page1/Page1';
import Page2 from './views/Page2/Page2';
import Page3 from './views/Page3/Page3';
import Page4 from './views/Page4/Page4';
import Page5 from './views/Page5/Page5';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/page1">
            <Page1 />
          </Route>
          <Route exact path="/page2">
            <Page2 />
          </Route>
          <Route exact path="/page3">
            <Page3 />
          </Route>
          <Route exact path="/page4">
            <Page4 />
          </Route>
          <Route exact path="/page5">
            <Page5 />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
