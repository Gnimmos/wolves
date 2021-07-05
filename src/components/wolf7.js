import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import wolve1 from '../wolves/wolf7.png';
import soundfile from '../voices/EN/Story7_EN.mp3';
import soundfileCZ from '../voices/CZ/Story7_CZ.mp3';
import ReactAudioPlayer from 'react-audio-player';  
import { Link } from 'react-router-dom';
import './wolfs.css'

import { withTranslation, Trans } from "react-i18next";
import { Translation } from 'react-i18next';
import globalVal from '../globalVAl';
import Table1 from './wolf7table';

class Wolf7 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            play : false,
            lang : false,
            wolfs: "seventh",

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

                                <img className = "wolve1" src={wolve1} alt="Logo" width = "300px" height = "500px" onClick={this.playaudio.bind(this)} />

                                <ReactAudioPlayer
                                classsName="audioplayer"
                                src={this.state.lang ? soundfileCZ:soundfile}
                                autoPlay={this.state.play}
                                        controls
                                        />
                                                                            <br/>

                                                                            <br/>

                                <Link className="links" to="/locwolf7">
                                <b className="intro textalign">
                                UMPRUM - Foyer <br/>
                                Náměstí J. Palacha 80/3,  <br/>
                                116 93 Prague 1 <br/>
                                    </b>
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
                                    t =>  <p className = "textalign">{t("Can_I_Dislocate")}</p>
                                    }
                                </Translation>

                                    
                                <ContactForm  dataParentToChild={this.state.wolfs}/>
                                <Table1/>
                                    </Col>
                               </Row> 
                               <br/>


                </div>
          );
        };
  } 
  
 
  export default withTranslation("translations")(Wolf7);