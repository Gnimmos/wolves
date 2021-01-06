import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import Header from './Header';
import ContactForm from './ContactForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import wolve1 from '../wolves_pics/1.jpg';
import soundfile from '../resorces/wolve1.mp3';
import ReactAudioPlayer from 'react-audio-player';  

class Wovlespanel extends React.Component {
    render (){
        return (
            <Row className="justify-content-md-center" md={4}>

            <Col xs={4} className=" px-0 Scedutitle h-100 d-flex flex-column ">
            <img className = "wolve1" src={wolve1} alt="Logo" width = "250px" height = "500px" />
            <ReactAudioPlayer
                    src={soundfile}
                    autoPlay 
                    controls
                    />
                </Col>
                <Col xs={8} >
                <Header />

                <ContactForm />
                </Col>
           </Row> 
          );
        };
  } 
  
 
  export default Wovlespanel;  