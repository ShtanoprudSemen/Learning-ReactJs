import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';


const Repair = styled.div`
	color: #fff;
	font-size: 40px;
	font-weight: 700;
	line-height: 50px;

	span{
		display: block;
		font-size:24px;
		line-height: 30px;
	}

`

const LightText = styled.div`
	color:#fff;
	font-size: 18px;
	font-weight: 300;
	line-height: 30px;
	margin-top: 55px;
`

const CallButton = styled.button`
	background-color: #ffa14b;
	border-radius: 30px;
	margin-top: 35px;
	font-size: 18px;
	color: #fff;
	border: none;
	width: 247px;
	height: 67px;
	font-weight: bold;
`

class Main extends React.Component {
	render(){
		return(
			<Row>
				<Col lg={5}>
					<Repair>
						Качественный ремонт
						<span>
							iphone за 35 минут и гарантия 1 год
						</span>
						<LightText>
							Оставьте заявку на бесплатную диагностику без очереди, и получите защитное стекло, стоимостью 1000 рублей, с установкой в подарок!
						</LightText>
						<CallButton> Отправить заявку! </CallButton>
					</Repair>
				</Col>
				<Col lg={6} lgOfsset={1}>
				</Col>
			</Row>
		);
	}
}

export default Main;