import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class About extends Component {
    constructor(props) {
        super(props);
    }

    // navigation = () => {
    //     var aboutBlock = ReactDOM.findDOMNode(this.refs.aboutBlock);
    //     this.props.name.addEventListener('click', (e) => {
    //         // divVisibility(nodeAffect, nodes.divs);
    //         aboutBlock.scrollIntoView(true);
    //     });
    // }

    render() {
        return (
            <div id="aboutBlock" ref="aboutBlock" className="container show">
                <div className="col-lg-6">
                    <div className="fb-page" data-href="https://www.facebook.com/SinergiaPlusCentre/" data-tabs="timeline"
                        data-width="500" data-height="70" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false"
                        data-show-facepile="false">
                        <blockquote cite="https://www.facebook.com/SinergiaPlusCentre/" className="fb-xfbml-parse-ignore">
                            <a href="https://www.facebook.com/SinergiaPlusCentre/">Учебен център Синергия плюс</a>
                        </blockquote>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-6">
                    <h2>Синергия Плюс</h2>
                    <hr />
                    <p className="text-justify">Мисията на Синергия плюс е преобразуване на българската образователна система с цел пълноценно развитие на
                        всички грабдани през целия живот в отговор на икономическата, социалната и културните изисквания на обществото
                        през 21 век.</p>
                    <p className="text-justify">Учебен център "СИНЕРГИЯ ПЛЮС" провежда корпоративни квалификационни обучения на заети лица, за големи търговски
                        вериги и производствени предприятия. Работим за промяната към общество, в което хора, групи и организации
                        работят заедно и активно участват в развитието на България, предоставяйки образователни услуги на деца
                        и възрастни, консултиране, подготовка и управление при кандидатстване за еврофинансиране. Реализираме
                        проекти съвместно с Агенцията по заетостта по ОП „Развитие на човешките ресурси” като доставчик на обучение
                        с ваучери. Курсовете за деца от 1-ви до 4-ти клас се провеждат в Детски център "МРАВЧО" създаден към
                            "СИНЕРГИЯ ПЛЮС", за да превърне посещенията, на вашето дете при нас, в истинско приключение.</p>
                </div>
            </div>
        );
    }
}



export default About;
