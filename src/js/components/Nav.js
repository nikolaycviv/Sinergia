import React, { Component } from 'react';
// import scrollToComponent from 'react-scroll-to-component';
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: null };
    }

    handleClick = (index) => {
        this.setState({ activeIndex: index });
        // this.navigationListener( { activeIndex } );
    }

    scrollToHome = () => {
        const home = this.home.offsetTop;
        window.scrollTo(0, home);
    }

    // scrollToElement = () => {
    //     scrollToComponent(this.aboutNav, { offset: 0, align: 'top', duration: 500});
    // }

    render() {
        return (
            <nav name="navigation" className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a ref={elem => (this.home = elem)} id="home" className="navbar-brand" onClick={this.scrollToHome}>Начало</a>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarButtons" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" name="navbarButtons">
                        <ul className="nav navbar-nav navbar-right">
                            {/* <Li name="За нас" ref={elem => (this.aboutNav = elem)} onClick={this.scrollToElement} index={0} isActive={this.state.activeIndex === 0} onClick={this.handleClick} /> */}
                            <Li name="За нас" index={0} isActive={this.state.activeIndex === 0} onClick={this.handleClick} />
                            <Li name="Новини" index={1} isActive={this.state.activeIndex === 1} onClick={this.handleClick} />
                            <Li name="Предимства" index={2} isActive={this.state.activeIndex === 2} onClick={this.handleClick} />
                            <Li name="Обучения" index={3} isActive={this.state.activeIndex === 3} onClick={this.handleClick} />
                            <Li name="Дипломи" index={4} isActive={this.state.activeIndex === 4} onClick={this.handleClick} />
                            <Li name="Екип" index={5} isActive={this.state.activeIndex === 5} onClick={this.handleClick} />
                            <Li name="Кариери" index={6} isActive={this.state.activeIndex === 6} onClick={this.handleClick} />
                            <Li name="Контакти" index={7} isActive={this.state.activeIndex === 7} onClick={this.handleClick} />
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

class Li extends Component {
    handleClick = () => this.props.onClick(this.props.index)

    render() {
        return <li
            className={
                this.props.isActive ? 'navActive btn navbar-btn' : 'btn navbar-btn'
            }
            onClick={this.handleClick}
        >
            <span>{this.props.name}</span>
        </li>
    }
}


export default Nav;
