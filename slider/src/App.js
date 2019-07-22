import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components'


class App extends Component{
  render() {
    return (
        <div className="wrapper">
          <SayfullName name="Sem" surname="Shtanoprud" link="google.com" />
          <SayfullName name="Oleg" surname="Petrov" link="facebook.com" />
          <SayfullName name="Nikita" surname="Serov" link="#" />
        </div>
      );
  }
}


function SayfullName(props) {
  return(
    <div>
      <h1>Моё имя - {props.name}, Моя фамилия - {props.surname} </h1>
      <a href="{props.link}">Ссылка на мой профиль</a>
    </div>
  )
}

export default App;
