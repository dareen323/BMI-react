import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://cdn1.vectorstock.com/i/1000x1000/53/60/calculator-icon-on-white-background-vector-19305360.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            BMI calculator
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>)
  }
}