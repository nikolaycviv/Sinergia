import React, { Component } from 'react'

class Diplomas extends Component {
  render() {
    return (
      <div id="diplomasBlock">
        <div id="diplomasRow" className="parallaxSection">
          <div className="shadowSection">
            <h2>Дипломи</h2>
            <hr />
          </div>
        </div>
        <div id="diplomasBlocks" className="row">
          <div className="container">
            <div className="col-md-1"></div>
            <div className="diplomasBlock col-md-10">
              <p>Дипломи бла-бла</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Diplomas
