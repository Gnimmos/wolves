import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Row, Col } from 'react-bootstrap';
import logo1 from './noun_Prague.829619a1.png'
import { withTranslation } from "react-i18next";
import { Translation } from 'react-i18next';
import './Menubar.css'

import globalVal from './globalVAl';


class Menubar extends React.Component{
  constructor(props)
  {
    super(props);
    
    this.state ={
      logo :logo1,
      lang : true,
    };      
      this.loadaudio = this.loadaudio.bind(this);
  }

  componentDidMount(){
    this.loadaudio();
  }
    loadaudio(){

      var aud = globalVal.value;
      if(!aud==='en'){
        this.setState({
          lang: false 
           
        });
        globalVal.value = 'en'

      }else{
        this.setState({           
          lang: true 

        });
        globalVal.value = 'cz'

      }
    }
    
  
    render(){

      const { i18n } = this.props;

      const changeLanguage = lng => {
        i18n.changeLanguage(lng);
        if (this.state.lang) {
          this.setState({           
            lang: false 
          });
          

          globalVal.value = 'en';

        }
        else{
          this.setState({ 
            lang: true
          });
          globalVal.value = 'cz';



        }
        
      };
        return (
            <Row className="cont1" >
            <Col classname="center" xs={4}>
            <img  className = "App-logo" src={this.state.logo} alt="Logo" />
            </Col>
            <Col classname="center" xs={4}>

               <Translation>
      {
        t =>  <h1 className="title">{t("Wolf talks")}</h1>
          }
    </Translation>
            </Col>
            <Col classname="center" xs={4}>
            <button className="lang"onClick={() => changeLanguage(this.state.lang ? globalVal.value :  globalVal.value)}>{this.state.lang ?   globalVal.value :  globalVal.value}</button>

            </Col>
            </Row>
 
            );
        }
}


export default withTranslation("translations")(Menubar);