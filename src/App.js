import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Component/HomePageComponent/homePage";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Routing from "./Component/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/Child">Child</Link>
        <Link to="/Teacher">Teacher</Link>
        <Link to="/Parents">Parents</Link>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
