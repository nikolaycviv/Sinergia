/* global google */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Map extends Component {
  componentDidMount() {
    // Connect the initMap() function within this class to the global window context,
    // so Google Maps can invoke it
    window.initMap = this.initMap
    // Asynchronously load the Google Maps script, passing in the callback reference
    this.loadJS("https://maps.googleapis.com/maps/api/js?key=AIzaSyDzLn6M-AjLz2hoe_mo_YfLTyafe-45TEk&callback=initMap")
  }

  initMap = () => {
    var loc = {
      lat: 43.841800,
      lng: 25.949468
    }
    var map = new google.maps.Map(ReactDOM.findDOMNode(this.refs.map), {
      center: loc,
      zoom: 15
    })
    var marker = new google.maps.Marker({ // eslint-disable-line no-unused-vars
      map: map,
      position: loc
    })
  }

  loadJS = (src) => {
    var ref = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = src
    script.async = true
    ref.parentNode.insertBefore(script, ref)
  }

  render() {
    return (<div ref="map" id="map"></div>)
  }
}

export default Map
