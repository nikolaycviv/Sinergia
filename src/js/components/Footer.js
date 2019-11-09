import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div id="copyright" className="row">
        <div className="container">
          <div id="socialBtn">
            <a href="https://www.facebook.com/pg/SinergiaPlusCentre" target="blank" className="social">
              <h4>Повече информация може да намерите на нашата facebook страница.</h4>
              <img alt="" id="facebook" />
            </a>
          </div>
          <p>&copy; 2017 - Учебен център "Синергия Плюс". Всички права запазени. Designed and created by Nikolay Ivanov</p>
        </div>
      </div>
    )
  }
}

export default Footer
