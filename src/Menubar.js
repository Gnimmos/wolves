import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Card, Button} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Popup from "reactjs-popup";
import Media from 'react-bootstrap/Media';
import logo1 from './wolves_pics/noun_Prague.png'
import './Menubar.css'



class Menubar extends React.Component{
  constructor(props)
  {
    super(props);
    
    this.state ={
      logo :logo1,
    };
  }
    render(){
        return (
<Container className = "cont1"expand = "lg">
            <Row  className="Content">
              <Col md={12}>
            <img  className = "App-logo" src={this.state.logo} alt="Logo" />
            </Col>
            <Col md={12}>
            <h1 className="title">Exhbiting the Wolves</h1>
            </Col>
            </Row>
 
</Container>
            );
        }
}


export default Menubar;