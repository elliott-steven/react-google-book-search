import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NoResult from "./pages/NoResult";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "./App.css";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Wrapper>

            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/noMatch" component={NoResult} />

          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;
