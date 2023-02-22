import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";
import ContactNobackend from "./components/ContactNobackend";
import "./App.css";

const App = () => (
  <div className="App">
    <div className="App-header">
      <PortfolioContainer />
    </div>
    <div className="App-footer">
      <Footer />
    </div>
  </div>
);

export default App;
