import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div id="contactFormID" className="contactForm row">
          <h2>Контактна форма</h2>
          <hr />
          <h3>Въведете своите данни и съобщение</h3>
          <form className="form-group" action="" method="POST">
            <input id="name" name="name" className="inputInline form-control" type="text" placeholder="Име" required />
            <input id="email" name="email" className="inputInline form-control" type="email" placeholder="e-mail" required />
            <textarea id="message" name="message" className="form-control" placeholder="Съобщение" required></textarea>
            <input className="bannerBtn" type="submit" value="Изпратете съобщението" />
          </form>
        </div>
      </div>)
  }
}

export default Contact
