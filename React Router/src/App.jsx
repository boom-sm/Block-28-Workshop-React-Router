import { Routes, Route, Link, Router } from "react-router-dom";
import './App.css'
import Blue from "./components/Blue";
import Red from "./components/Red";
import Yellow from "./components/Yellow";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return(
  <div id="container">
      <div id="navbar">
        <Link to={'/blue'}>
          Blue
        </Link>
        <Link to={'/red'}>
          Red
        </Link>
        <Link to={'/'}>
          Home
        </Link>
        <Link to={'/yellow'}>
          Yellow
        </Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/yellow" Component={Yellow} />
          <Route path="/" Component={Home} />
          <Route path="/blue" Component={Blue} />
          <Route path="/red" Component={Red} />
        </Routes>
        
      </div>
      <Footer/>
    </div>
  )
}

export default App;
