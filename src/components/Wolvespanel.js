import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import wolve1 from '../wolves_pics/firstwolf.png';
import soundfile from '../resorces/wolf_speak1.mp3';
import ReactAudioPlayer from 'react-audio-player';  
import { Link } from 'react-router-dom';
import './wolfs.css'

import { withTranslation, Trans } from "react-i18next";
import { Translation } from 'react-i18next';

class Wovlespanel extends React.Component {
    constructor(props){
        super(props)
        this.state={
            play : false,
            lang : false,

        };
        this.playaudio =this.playaudio.bind(this);
    }

        playaudio(){       
        if(!this.play){
              this.setState({
                play:true
              })}
        else{
            this.setState({
              play:false
            })
        }
    
    }
    
    render (){
        const { t, i18n } = this.props;

        const changeLanguage = lng => {
          i18n.changeLanguage(lng);
          if (this.state.lang) {
            this.setState({           
              lang: false 
            });
            
      
          }
          else{
            this.setState({ 
              lang: true
            });
          }
          
        };
        return (
            <div className="wolvesdiv">   
                                <Row >

                                <Col lg={3} className=" colin ">
                                <button className="langu" onClick={() => changeLanguage(this.state.lang ?  "en" : "cz")}>{this.state.lang ?  "en" : "cz"}</button>

                                <img className = "wolve1" src={wolve1} alt="Logo" width = "300px" height = "500px" onClick={this.playaudio.bind(this)} />

                                <ReactAudioPlayer
                                classsName="audioplayer"
                                        src={soundfile}
                                        autoPlay={this.state.play}
                                        controls
                                        />
                                                                            <br/>

                                                                            <br/>

                                <Link className="links" to="/locwolf1">
                                <b className="intro textalign">
                                    Fotograf Gallery <br/>
                                    Jungmannova 19, <br/>
                                    110 00 Nové Město <br/>
                                    Praha <br/></b>
                                    <br/>

                                </Link>
                                <Translation>
                                {
                                    t =>  <b className="intro textalign">{t("Welcome")}</b>
                                    }
                                </Translation>
   
                                    </Col>
                                    <Col lg={8} className="col2" >
                                    <Translation>
                                {
                                    t =>  <p className = "textalign">{t("wolvetalks")}</p>
                                    }
                                </Translation>

                                    
                                    <ContactForm />
                                    </Col>
                               </Row> 
                               <br/>


                </div>
          );
        };
  } 
  
 
  export default withTranslation("translations")(Wovlespanel);