import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
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
<Container className = "cont1" bg="trasparent" expand="lg" className="px-0">
            <Row  className="Content">
            <Col xs={6}>
            <img  className = "App-logo" src={this.state.logo} alt="Logo" />
            </Col>
            <Col xs={6}>
            <h1 className="title">Exhbiting the Wolves</h1>
            </Col>
            </Row>
 
</Container>
            );
        }
}


export default Menubar;