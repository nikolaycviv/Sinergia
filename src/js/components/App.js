import React, { Component } from 'react';
import About from './About';
// import Services from './Services';
import Advantages from './Advantages';
import Careers from './Careers';
import Contact from './Contact';
import Courses from './Courses';
import Diplomas from './Diplomas';
import Footer from './Footer';
import Map from './Map';
import Nav from './Nav';
import News from './News';
import Phone from './Phone';
import Team from './Team';
import Top from './Top';
import WorkingHours from './WorkingHours';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <About />
        <Top />
        <News />
        <Advantages />
        <Courses />
        <Diplomas />
        <Team />
        {/* <Services /> */}
        <Careers />
        <Contact />
        <Phone />
        <WorkingHours />
        <Map />
        <Footer />
      </div>
    );
  }
}

export default App;
