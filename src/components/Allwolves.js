import React from 'react';
import '../index.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import wolve1 from '../wolves/wolf1.png';
import wolve2 from '../wolves/wolf2.png';
import wolve3 from '../wolves/wolf3.png';
import wolve4 from '../wolves/wolf4.png';
import wolve5 from '../wolves/wolf5.png';
import wolve6 from '../wolves/wolf6.png';
import wolve7 from '../wolves/wolf7.png';
import wolve8 from '../wolves/wolf8.png';
import wolve9 from '../wolves/wolf9.png';
import wolve10 from '../wolves/wolf10.png';
import wolve11 from '../wolves/wolf11.png';
import wolve12 from '../wolves/wolf12.png';
import { Link } from 'react-router-dom';

import leftarrow from '../left-arrow.png'



class Allwolves extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this); // i think you are missing this
    
}
goBack(){
  this.props.history.goBack();

}

    render() {
      return (
          <div style={{height:"100%", paddingTop:"3%"}}>

              <Container>
              <button className="backbutton"onClick={this.goBack}><img height="25px"src={leftarrow} alt="back"></img></button>
            <br/>
            <br/>

                <Row  lg={4}>
                <Col lg={3} >
                <Link href="blank" className = "wolvethumb" to="/wolf1"><img className = "wolvethumb1" src={wolve1}alt ="wolf 1"></img></Link>
                <br/>
                <br/>
                </Col>
                <Col lg={3} >
                <Link className = "wolvethumb" to="/wolf2"><img className = "wolvethumb1" src={wolve2}alt ="wolf 1"></img></Link>
                <br/>
                                                                            <br/>
                </Col>
                <Col lg={3} className="widewolves" >
                <Link className = "wolvethumb" to="/wolf3"><img className = "wolvethumb1link" src={wolve3}alt ="wolf 1"></img></Link>
                <br/>
                                                                            <br/>
                </Col>
                <Col className = "totheright" lg={3} >
                <Link className = "wolvethumb" to="/wolf4"><img className = "wolvethumb1" src={wolve4}alt ="wolf 1"></img></Link>
                <br/>
                                                                            <br/>
                </Col>

                </Row>
                <Row  lg={4}>       
                <Col lg={3}  >
                <Link className = "wolvethumb" to="/wolf5"><img className = "wolvethumb1" src={wolve5}alt ="wolf 1"></img></Link>
                <br/>
                <br/>
                </Col>
                <Col lg={3} >
                <Link className = "wolvethumb" to="/wolf6"><img className = "wolvethumb1" src={wolve6}alt ="wolf 1"></img></Link>
                <br/>
                                                                            <br/>
                </Col>
                <Col lg={3} >
                <Link className = "wolvethumb" to="/wolf7"><img className = "wolvethumb1" src={wolve7}alt ="wolf 1"></img></Link>
                <br/>
                                                                            <br/>
                </Col>
                <Col lg={3} >
                <Link className = "wolvethumb" to="/wolf8"><img className = "wolvethumb1" src={wolve8}alt ="wolf 1"></img></Link>
                <br/>
                                                                            <br/>
                </Col>

                </Row>   
                <br/>     
                <Row  lg={4}>      
                <Col lg={3}  >
                <Link className = "wolvethumb" to="/wolf9"><img className = "wolvethumb1" src={wolve9}alt ="wolf 1"></img></Link>
                <br/>
                                                                            <br/>
                </Col>
                <Col lg={3} >
                <Link className = "wolvethumb" to="/wolf10"><img className = "wolvethumb1" src={wolve10}alt ="wolf 1"></img></Link>
                <br/>
                                                                            <br/>
                </Col>
                <Col lg={3} >
                <Link className = "wolvethumb" to="/wolf11"><img className = "wolvethumb1" src={wolve11}alt ="wolf 1"></img></Link>
                <br/>
                                                                            <br/>
                </Col>
                <Col lg={3} >
                <Link className = "wolvethumb" to="/wolf12"><img className = "wolvethumb1" src={wolve12}alt ="wolf 1"></img></Link>
                <br/>
                                                                            <br/>
                </Col>

                </Row>
                </Container>
        </div>
      )
    }
}

export default Allwolves;
