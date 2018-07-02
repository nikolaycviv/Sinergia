import React, { Component } from 'react';
// import scrollToComponent from 'react-scroll-to-component';
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
  // componentDidMount() {
  //   scrollToComponent(this.About, { offset: 0, align: 'top', duration: 500, ease:'inCirc'});
  // }

  // scrollFunc = (element) => {
  //   scrollToComponent(element, { offset: 0, align: 'top', duration: 500})
  // }

  render() {
    return (
      <div className="App">
        {/* <Nav onClick={() => this.scrollFunc(this.About)} /> */}
        <Nav/>
        <Top />
        <About/>
        {/* <About ref={(section) => { this.About = section; }} /> */}
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
