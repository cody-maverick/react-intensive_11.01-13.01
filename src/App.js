import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Sasha" sirname="Matveev" link="vk.com" />
        <SayFullName name="Misha" sirname="Ivanon" link="vk.com" />
        <SayFullName name="Vladimir" sirname="Putin" link="#" />
      </div>
    );
  }
}

function SayFullName(props) {
  return (
    <div>
      <h1>My name {props.name}, sirname - {props.sirname}</h1>
      <a href={props.link}>Link on my profile</a>
    </div>
  );
}
export default App;
