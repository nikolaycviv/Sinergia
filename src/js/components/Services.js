import React, { Component } from 'react'

class Services extends Component {
  render() {
    return (
      <div id="servicesBlock">
        <div id="servicesRow" className="parallaxSection">
          <div className="shadowSection">
            <h2>Услуги</h2>
            <hr />
          </div>
        </div>
        <div id="serviceBlocks" className="row">
          <div className="container">
            <div className="serviceBlock col-md-4">
              <h1>Изработване на Уеб Сайтове</h1>
              <h1>Услуга 1</h1>
              <img alt="" src="https://cdn0.iconfinder.com/data/icons/thinico/88/thinico-17-512.png" />
              <p>За повече информация изпратете запитване на офисния e-mail.</p>
              <p></p>
            </div>
            <div className="serviceBlock col-md-4">
              <h1>Услуга 2</h1>
              <img alt="" src="https://cdn0.iconfinder.com/data/icons/thinico/88/thinico-17-512.png" />
              <p></p>
            </div>
            <div className="serviceBlock col-md-4">
              <h1>Услуга 3</h1>
              <img alt="" src="https://cdn0.iconfinder.com/data/icons/thinico/88/thinico-17-512.png" />
              <p></p>
            </div>
          </div>
        </div>
      </div>)
  }
}

export default Services
