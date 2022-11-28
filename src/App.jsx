import React from 'react';
import './App.scss' ;
import Topbar from "./components/topbar/Topbar";
import Intro from './components/intro/Intro';
import Portfolios from './components/portfolio/Portfolio';
import Works from "./components/works/Works";
import Testimonials from './components/testimonials/Testimonials';
import Contact from "./components/contact/Contact";
import { useState } from 'react';
import Menu from './menu/Menu';


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
          <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
          <Intro />
          <Portfolios />
          <Works />
          <Testimonials />
          <Contact />
      </div>
    </div>
  );
}

// export default App;
