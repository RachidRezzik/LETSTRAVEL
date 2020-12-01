import React, {useState} from 'react'
import './App.css';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Africa from './components/Africa'
import Asia from './components/Asia'
import NorthAmerica from './components/NorthAmerica'
import SouthAmerica from './components/SouthAmerica'
import Europe from './components/Europe'
import Footer from './components/Footer'
import scroll_top from './images/scroll_top.png'





function App() {
  const [scrollNeeded, setScrollNeeded] = useState(false)

  const handleScrollNeeded = () => {
    if (window.scrollY >= 55) {
      setScrollNeeded(true)
    } else{
      setScrollNeeded(false)
    }
  }

  window.addEventListener("scroll", handleScrollNeeded)

  const handleScrollTop = () =>{
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="App">
      <HashRouter basename=''>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/Africa" component={Africa}/>
          <Route  path="/Asia" component={Asia}/>
          <Route  path="/NorthAmerica" component={NorthAmerica}/>
          <Route  path="/SouthAmerica" component={SouthAmerica}/>
          <Route  path="/Europe" component={Europe}/>
        </Switch>
        <img className={scrollNeeded ? "scroll_top active" : "scroll_top"} src={scroll_top} alt="" onClick={handleScrollTop}/>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
