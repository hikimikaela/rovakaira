import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { navigation } from '../config/constants.js'



class Navigation extends Component {
  constructor() {
  super();

}
  render () {
  return (
  <div className="nav" id="nav">
    <ul>
    <li><a href="#" id="mainsearch" title="Haku"></a>Haku</li>
    <li><a href="#" id="stats" title="Tilastot"></a>Tilastot</li>
    <li><a href="#" id="log-out" title="Kirjaudu ulos"></a>Kirjaudu ulos</li>
    </ul>
  </div>
);
}
}

export default Navigation;
