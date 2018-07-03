import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Li from './Li';
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: null };
    }

    handleClick = (index) => {
        this.setState({ activeIndex: index });
    }

    scrollToHome = () => {
        const home = this.home.offsetTop;
        window.scrollTo(0, home);
    }

    scrollToElement = (index) => {
        if (index === 0) {
            scrollToComponent(this.props.test.about, { offset: 0, align: 'top', duration: 500 });
        } else if (index === 1) {
            scrollToComponent(this.props.test.news, { offset: 0, align: 'top', duration: 500 });
        } else if (index === 2) {
            scrollToComponent(this.props.test.advantages, { offset: 0, align: 'top', duration: 500 });
        } else if (index === 3) {
            scrollToComponent(this.props.test.courses, { offset: 0, align: 'top', duration: 500 });
        } else if (index === 4) {
            scrollToComponent(this.props.test.diplomas, { offset: 0, align: 'top', duration: 500 });
        } else if (index === 5) {
            scrollToComponent(this.props.test.team, { offset: 0, align: 'top', duration: 500 });
        } else if (index === 6) {
            scrollToComponent(this.props.test.careers, { offset: 0, align: 'top', duration: 500 });
        } else if (index === 7) {
            scrollToComponent(this.props.test.contact, { offset: 0, align: 'top', duration: 500 });
        }
    }

    onClick = (index) => {
        this.handleClick();
        this.scrollToElement(index);
    }

    render() {
        return (
            <nav name="navigation" className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a ref={elem => (this.home = elem)} id="home" className="navbar-brand" onClick={this.scrollToHome}>Начало</a>
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#navbarButtons"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarButtons">
                        <ul className="nav navbar-nav navbar-right">
                            <Li name="За нас" index={0} isActive={this.state.activeIndex === 0} onClick={this.onClick} />
                            <Li name="Новини" index={1} isActive={this.state.activeIndex === 1} onClick={this.onClick} />
                            <Li name="Предимства" index={2} isActive={this.state.activeIndex === 2} onClick={this.onClick} />
                            <Li name="Обучения" index={3} isActive={this.state.activeIndex === 3} onClick={this.onClick} />
                            <Li name="Дипломи" index={4} isActive={this.state.activeIndex === 4} onClick={this.onClick} />
                            <Li name="Екип" index={5} isActive={this.state.activeIndex === 5} onClick={this.onClick} />
                            <Li name="Кариери" index={6} isActive={this.state.activeIndex === 6} onClick={this.onClick} />
                            <Li name="Контакти" index={7} isActive={this.state.activeIndex === 7} onClick={this.onClick} />
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
