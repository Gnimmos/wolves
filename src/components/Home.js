import React from 'react';
import Maps from '../Maps.js';
import '../index.css'
import Menubar from '../Menubar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo2 from '../hrlogo.png'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { Link } from 'react-router-dom';

import { Translation } from 'react-i18next';



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false,
      isPaneOpenLeft: false,
      isPaneOpenRight: false,
    }
  }
  render() {
    const { t } = this.props;

    return (

        <div className=" cont">
            <Container className = "cont Header " fluid="true" expand = "lg">
            <Menubar/>

            <Row className = "middle">



                  <Col className="buttoms but1"  xs={4}>
                  <button className="buttoms but1 pos" onClick={() => this.setState({ isPaneOpenLeft: true })}>
                  <Translation>
                                {
                                    t =>  <b className="intro textalign">{t("ABOUT")}</b>
                                    }
                                </Translation>
                  </button>
                  </Col>
                  <Col className="buttoms but1"  xs={4}>
                  <button className="buttoms but1 pos"  onClick={() => this.setState({ isPaneOpen: true })}>
                  <Translation>
                                {
                                    t =>  <b className="intro textalign">{t("MAP")}</b>
                                    }
                                </Translation>                 </button>

                  </Col>
                  <Col className="buttoms but1"   xs={4}>
                  <Link href="blank"to="/Allwolves">
                  <button className="buttoms but1 pos"  >

                  <Translation>
                                {
                                    t =>  <b className="intro textalign">{t("WOLVES")}</b>
                                    }
                                </Translation>
                  </button>
                  </Link>
                  </Col>

    
                </Row>

                <Row className="footerText">
<Col sm={6}>
<Translation>
                                {
                                    t =>  <p className=" text">{t("Silencing")}</p>
                                    }
                                </Translation>
</Col>
<Col sm={6}>
<a  className = " hyper" href="https://iksz.fsv.cuni.cz"  target="blank">
<img className="footer-logo" style={{picturecolor:"black"}} src={logo2} alt="Logo" color="white" />
</a>
</Col>
</Row>    



            </Container>

            <SlidingPane
        className="some-custom-class colorit"
        overlayClassName="some-custom-overlay-class"
        isOpen={this.state.isPaneOpen}
        from = "left"
        width="100%"
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          this.setState({ isPaneOpen: false });
        }}
      >
      <Maps/>
      </SlidingPane>


      
      <SlidingPane
        className="some-custom-class colorit"
        overlayClassName="some-custom-overlay-class"        
        isOpen={this.state.isPaneOpenLeft}
        from="left"
        width="100%"
        onRequestClose={() => this.setState({ isPaneOpenLeft: false })}
      >
        <div>
          <p className="about">
          <em>         
                                   <Translation>
                                {
                                    t =>  <p>{t("wolftalks")}</p>
                                    }
                                </Translation> 
                                 </em> 
                                 <br/>
                                 <br/>
                                 <br/>

          <Translation>
                                {
                                    t =>  <text>{t("about1")}</text>
                                    }
                                </Translation>  
         <em>          <Translation>
                                {
                                    t =>  <text>{t("wolftalks")}</text>
                                    }
                                </Translation>  </em>    
                                 <Translation>
                                {
                                    t =>  <text>{t("about11")}</text>
                                    }
                                </Translation> <br/>
        <br/>
        <Translation>
                                {
                                    t =>  <text>{t("about2")}</text>
                                    }
                                </Translation> 
<br/>
<br/>
<Translation>
                                {
                                    t =>  <text>{t("about3")}</text>
                                    }
                                </Translation> 
<br/>
<br/>
<Translation>
                                {
                                    t =>  <text>{t("about41")}</text>
                                    }
                                </Translation> 

                                <em>         
                                   <Translation>
                                {
                                    t =>  <text>{t("wolftalks")}</text>
                                    }
                                </Translation> 
                                 </em>  
                                 <Translation>
                                {
                                    t =>  <text>{t("about42")}</text>
                                    }
                                </Translation>    
                                                              <em>         
                                   <Translation>
                                {
                                    t =>  <text>{t("wolftalks")}</text>
                                    }
                                </Translation> 
                                 </em> 
                                 <Translation>
                                {
                                    t =>  <text>{t("about43")}</text>
                                    }
                                </Translation> 
<br/>
<br/>
<em>         
                                   <Translation>
                                {
                                    t =>  <p>{t("wolftalks")}</p>
                                    }
                                </Translation> 
                                 </em> 
                                 <br/>
                                 <Translation>
                                {
                                    t =>  <p>{t("aboutby")}</p>
                                    }
                                </Translation> 
<br/>
<br/>
<Translation>
                                {
                                    t =>  <p>{t("developers")}</p>
                                    }
                                </Translation> 

<br/>
<br/>
<Translation>
                                {
                                    t =>  <p>{t("voices")}</p>
                                    }
                                </Translation> 


<br/>
<br/>
<Translation>
                                {
                                    t =>  <p>{t("sound")}</p>
                                    }
                                </Translation> 
<br/>
<br/>
<Translation>
                                {
                                    t =>  <p>{t("translation")}</p>
                                    }
                                </Translation> 

<br/>
<br/>
<Translation>
                                {
                                    t =>  <p>{t("locations")}</p>
                                    }
                                </Translation> 

<br/>
<br/>
<Translation>
                                {
                                    t =>  <p>{t("logo")}</p>
                                    }
                                </Translation> 

<br/>
<br/>
<Translation>
                                {
                                    t =>  <p>{t("thisresearch")}</p>
                                    }
                                </Translation> 

<br/>
<br/>
<Translation>
                                {
                                    t =>  <text>{t("thecontent")}</text>
                                    }
                                </Translation> <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="none">(CC BY-NC-ND 4.0)</a  >


<br/>
<br/>
<br/>
<br/>


<Translation>
                                {
                                    t =>  <p>{t("readmore")}</p>
                                    }
                                </Translation> 
<br/>
<br/>

<a href="https://fotografmagazine.cz/en/magazine/living-with-humans/topic,tema-en/asamblaz-v-zoo-praha-uvahy-nad-hranicemi-diskurzivna-a-materialna/" target="none">CARPENTIER, NICO (2020) “The Prague Zoo Wolf Assemblage: Reflections on the Frontiers of the Discursive and the Material”, <em>Fotograf</em>, 35, 4-7.</a>
<br/>
<br/>

<a href="https://doi.org/10.1075/jlp.20045.car" target="none">CARPENTIER, NICO (2021) “Doing Justice to the Agential Material: A Reflection on a Non-Hierarchical Repositioning of the Discursive and the Material”, <em>Journal of Language and Politics</em>, 20(1): 112–128.</a>
<br/>
<br/>
<a href="http://comunicazionisociali.vitaepensiero.com/scheda-articolo_digital/nico-carpentier/silencing---unsilencing-nature-a-participatory-visual-essayon-the-right-to-flourish-001200_2021_0001_0061-370756.html" target="none">

CARPENTIER, NICO (2021) “Silencing / Unsilencing Nature: A Participatory Visual Essay on the Right to Flourish”, <em>Comunicazioni Sociali</em>, 1: 60-69.
</a>

<br/>
<br/>
<Translation>
                                {
                                    t =>  <text>{t("credit1")}</text>
                                    }
                                </Translation> 
<a href="https://mistra.fsv.cuni.cz/" target="none">https://mistra.fsv.cuni.cz/</a>
</p></div>
      </SlidingPane>

        </div>

    );
  }
}

export default Home;

