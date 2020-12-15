import React from 'react';
import './App.css';
import Header from './Header';
//import NavAppBar from './Navbar'
import Whatido from './whatido';
import Skills from './Skills';
import Projects from './Devprojects';
import Graphics from './Graphic';
import Services from './Services';
import GraphServices from './GraphServices';
import Contact from './Cv';
function App() {
  return (
    <div >
      <Header />
      <Skills />
      <br />
      <Whatido />
      <Services />
      <Projects />
      <br />
      <br />
      <br />
      <br />
      <Graphics />
      <GraphServices />
      <br />
      <br />
      <br />
      <Contact />
    </div>
  );
}

export default App;
