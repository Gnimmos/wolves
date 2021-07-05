import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import wolve1 from '../wolves/wolf3.png';
import soundfile from '../voices/EN/Story3_EN.mp3';
import soundfileCZ from '../voices/CZ/Story3_CZ.mp3';

import ReactAudioPlayer from 'react-audio-player';  
import { Link } from 'react-router-dom';
import './wolfs.css'

import { withTranslation, Trans } from "react-i18next";
import { Translation } from 'react-i18next';
import globalVal from '../globalVAl';
import Table from './wolf3table';

class Wolf3 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            play : false,
            lang : false,
            wolfs: "third",


        };
        this.playaudio =this.playaudio.bind(this);
        this.loadaudio = this.loadaudio.bind(this);
    }

    componentDidMount(){
      this.loadaudio();
    }
    loadaudio(){

      var aud = globalVal.value;
      if(aud==='en'){
        this.setState({           
          lang: true 
        });

      }else{
        this.setState({           
          lang: false 
        });
      }
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
            globalVal.value = 'cz';

    
          }
          else{
            this.setState({ 
              lang: true
            });
            globalVal.value = 'en';

          }
          
        };
        return (
            <div className="wolvesdiv">   
                                <Row className= "wolfrow">

                                <Col lg={5} className=" colin ">
                                <div style={{width:"300px"}}>

                                <button className="langu" onClick={() => changeLanguage(this.state.lang ? globalVal.value :  globalVal.value)}>{this.state.lang ?  globalVal.value :  globalVal.value}</button>
          <br/>
                                <img  src={wolve1} alt="Logo" className ="diffwolf" width = "300px" height = "150px" onClick={this.playaudio.bind(this)} />

                                <ReactAudioPlayer
                                classsName="audioplayer"
                                src={this.state.lang ? soundfileCZ:soundfile}
                                autoPlay={this.state.play}
                                        controls
                                        />
                                                                            <br/>

                                                                            <br/>

                                <Link className="links" to="/locwolf3">
                                <b className="intro textalign">
                                    Fotograf Gallery <br/>
                                    Jungmannova 19, <br/>
                                    110 00 Nové Město <br/>
                                    Praha <br/></b>
                                    <br/>

                                </Link>
                                </div>
                                <Translation>
                                {
                                    t =>  <b className="intro textalign">{t("Welcome")}</b>
                                    }
                                </Translation>
                                <br/>

<br/>
                                    </Col>
                                    <Col lg={7} className="col2" >
                                    <Translation>
                                {
                                    t =>  <p className = "textalign">{t("Discurfication1")}</p>
                                    }
                                                                      </Translation>
                                                                      <Translation>

                              {
                                    t =>  <p className = "textalign">{t("Discurfication2")}</p>
                                    }
                                                                                                                                            </Translation>
       <Translation>
                           {
                                    t =>  <p className = "textalign">{t("Discurfication3")}</p>
                                    }
                                                                      </Translation>

                                    
                                                                      <ContactForm  dataParentToChild={this.state.wolfs}/>
                                   <Table/>
                                    </Col>
                               </Row> 
                               <br/>


                </div>
          );
        };
  } 
  
 
  export default withTranslation("translations")(Wolf3);