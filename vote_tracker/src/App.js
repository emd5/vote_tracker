import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/header.js";
import Vote_tracker from "./components/vote_tracker/vote_tracker.js";
import Footer from "./components/footer/footer.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Header></Header>
          <Vote_tracker></Vote_tracker>
          <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
