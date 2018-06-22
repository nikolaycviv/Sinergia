import React, { Component } from 'react';
class Nav extends Component {
  render() {
    return (
        <nav id="navigation" className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Начало</a>
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarButtons" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarButtons">
                    <ul className="nav navbar-nav navbar-right">
                        <li id="navAbout" className="btn navbar-btn navActive">За нас</li>
                        <li id="navNews" className="btn navbar-btn">Новини</li>
                        <li id="navAdvantages" className="btn navbar-btn">Предимства</li>
                        {/* <li id="navServices" className="btn navbar-btn">Услуги</li> */}
                        <li id="navCourses" className="btn navbar-btn">Обучения</li>
                        <li id="navDiplomas" className="btn navbar-btn">Дипломи</li>
                        <li id="navTeam" className="btn navbar-btn">Екип</li>
                        <li id="navCarriers" className="btn navbar-btn">Кариери</li>
                        <li id="navContact" className="btn navbar-btn">Контакти</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default Nav;
