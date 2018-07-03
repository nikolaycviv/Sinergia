import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
  constructor(props) {
    super(props);
    this.state = {
      about: '',
      news: '',
      advantages: '',
      courses: '',
      diplomas: '',
      team: '',
      // services: '',
      careers: '',
      contact: ''
    }
  }

  componentDidMount() {
    this.setState({
      about: ReactDOM.findDOMNode(this.refs.about),
      news: ReactDOM.findDOMNode(this.refs.news),
      advantages: ReactDOM.findDOMNode(this.refs.advantages),
      courses: ReactDOM.findDOMNode(this.refs.courses),
      diplomas: ReactDOM.findDOMNode(this.refs.diplomas),
      team: ReactDOM.findDOMNode(this.refs.team),
      // services: ReactDOM.findDOMNode(this.refs.services),
      careers: ReactDOM.findDOMNode(this.refs.careers),
      contact: ReactDOM.findDOMNode(this.refs.contact)
    })
  }

  scrollToElement = () => {
  }

  render() {
    return (
      <div className="App">
        <Nav onClick={this.scrollToElement} test={this.state} />
        <Top />
        <About ref="about" />
        <News ref="news" />
        <Advantages ref="advantages" />
        <Courses ref="courses" />
        <Diplomas ref="diplomas" />
        <Team ref="team" />
        {/* <Services ref="services"/> */}
        <Careers ref="careers" />
        <Contact ref="contact" />
        <Phone />
        <WorkingHours />
        <Map />
        <Footer />
      </div>
    );
  }
}

export default App;
