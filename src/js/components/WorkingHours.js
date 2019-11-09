import React, { Component } from 'react'

class WorkingHours extends Component {
  render() {
    return (
      <div id="contactInfo" className="row">
        <div className="container">
          <div className="contactStack col-md-4">
            <h4>Адрес</h4>
            <p>7002, гр. Русе</p>
            <p>ул. "Цар Шишман" №3</p>
            <p>(До старата поща)</p>
          </div>
          <div className="contactStack col-md-4">
            <h4>Работно време</h4>
            <p>понеделник - петък: 7:30 - 17:30</p>
            <p>събота и неделя: почивни дни</p>
          </div>
          <div className="contactStack col-md-4">
            <h4>Контакти</h4>
            <p>тел.: +359 889 11 77 42</p>
            <p>e-mail офис: office@sinergiaplus.eu</p>
            <p>e-mail управител: eleonora@sinergiaplus.eu</p>
          </div>
        </div>
      </div>)
  }
}

export default WorkingHours
