import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
  color:#fff;
  font-weight: 700;
  line-height: 50px;
  font-size: 40px;

  span {
    display: block;
    font-size:24px;
    line-height: 30px;
  }
`
const LightText = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  padding-top: 54px;
`
const MainButton = styled.button`
  width: 247px;
  height: 67px;
  background: #ffa14b;
  border-radius: 30px;
  font-size:18px;
  color:#fff;
  font-weight: 400;
  border: none;
  margin-top: 32px;
`

export default class Main extends Component {
  render() {
    return (
      <Row>
        <Col lg={5}>
          <Repair>
            Качественный ремонт
            <span>
              iphone за 35 минут и гарантия 1 год
            </span>
          </Repair>
          <LightText>
            Оставьте заявку на бесплатную диагностику без очереди,
и получите защитное стекло, стоимостью 1000 рублей,
с установкой в подарок!
          </LightText>
          <MainButton>
            Отправить заявку!
          </MainButton>
        </Col>
        <Col lg={6} lgOffset={1}>
        
        </Col>
      </Row>
    )
  }
}