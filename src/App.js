import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NewsPage from "./pages/NewsPage";
import SectorPage from "./pages/SectorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/sectors/" component={SectorPage} />
        <Route path="/news/" component={NewsPage} />
      </Router>
    </div>
  );
}

export default App;
