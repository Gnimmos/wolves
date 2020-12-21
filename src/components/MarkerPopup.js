import React from 'react';
import {Popup} from 'react-leaflet';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import Media from 'react-bootstrap/Media';
import Header from './Header';
import ContactForm from './ContactForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import wolve1 from '../wolves_pics/1.jpg';
import soundfile from '../resorces/wolve1.mp3';
import ReactAudioPlayer from 'react-audio-player';  


const MarkerPopup = (props) => {
  const { name } = props.data;
  console.log(name);

  return  (<Popup  autoPan={true} maxWidth="200%" maxHeight="auto" className="Popup">



      <div className="aboutlemon">   

                                <Row className="justify-content-md-center" md={4}>

                                <Col md={4} className=" px-0 Scedutitle h-100 d-flex flex-column ">
                                <img className = "wolve1" src={wolve1} alt="Logo" width = "250px" height = "500px" />
                                <ReactAudioPlayer
                                        src={soundfile}
                                        autoPlay 
                                        controls
                                        />
                                    </Col>
                                    <Col md={8} >
                                    <Header />

                                    <ContactForm />
                                    </Col>
                               </Row> 
                               <br/>


                </div>
  </Popup>);
};

export default MarkerPopup;
