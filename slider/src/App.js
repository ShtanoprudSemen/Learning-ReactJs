import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'reactstrap';
import styled from 'styled-components';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

const url = process.env.PUBLIC_URL + '/img/bg.png';


const HeaderWraper = styled.header`
	width: 100%;
	height: 49px;
	background-color: #242424;
	opacity: .8;
` 

const MenuWrapper = styled.div`
	height: 89px;
	padding-top: 20px;
	
`
const MainWrapper = styled.main`
	height: 600px;
	padding-top: 130px;
	background: url(${url}) no-repeat;
	background-size: cover;
`

class App extends Component{
  render() {
    return (
       <div className="App">
       		<HeaderWraper>
		       <Container>
	    		   <Header />
		       </Container>
       		</HeaderWraper>
       		<MenuWrapper>
          		<Container>
	          		<Menu />
          		</Container>
       		</MenuWrapper>
       		<MainWrapper>
       			<Container>
	    	      <Main />
       			</Container>
       		</MainWrapper>
       </div>
      );
  }
}

export default App;
