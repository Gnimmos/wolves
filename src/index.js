import React from 'react';
import ReactDOM from 'react-dom';
import Maps from './Maps.js';
import './index.css'
import Menubar from './Menubar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo2 from './wolves_pics/iksz_logo.png'
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false,
      isPaneOpenLeft: false,
    }
  }
  render() {
    return (
        <div className=" cont">
            <Container className = "cont Header " fluid="true" expand = "lg">
            <Row className = "cont">

                  <Col md={12}>
                    <Menubar/>
                  </Col>

                  <Col className="buttoms but1"  md={4}>
                  <button className="buttoms but1" onClick={() => this.setState({ isPaneOpenLeft: true })}>
                    ABOUT
                  </button>
                  </Col>
                  <Col className="buttoms but1"   md={4}>
                  <button className="buttoms but1"  onClick={() => this.setState({ isPaneOpenLeft: true })}>
                    WOLVES
                  </button>
                  </Col>
                  <Col className="buttoms but1"  md={4}>
                  <button className="buttoms but1"  onClick={() => this.setState({ isPaneOpen: true })}>
                  MAP
                 </button>

                  </Col>
                  <Col   md={12} >
                      <Row className="footerText">

                          <p  className = "text">The Wolves at the Prague Zoo Assemblage project </p>
                          <a  className = " ml-auto" href="https://wolf.org/wow/europe/czech-republic/"  target="blank">
                          <img className="footer-logo" style={{picturecolor:"black"}} src={logo2} alt="Logo" color="white" />
                          </a>
                        </Row>        
                </Col>
                </Row>



            </Container>

            <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={this.state.isPaneOpen}
        title="Hey, it is optional pane title.  I can be React component too."
        subtitle="Optional subtitle."
        from = "bottom"
        width="100%"

        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          this.setState({ isPaneOpen: false });
        }}
      >
      <Maps/>
      </SlidingPane>
      <SlidingPane
        closeIcon={<div>Some div containing custom close icon.</div>}
        isOpen={this.state.isPaneOpenLeft}
        title="Hey, it is optional pane title.  I can be React component too."
        from="left"
        width="200px"
        onRequestClose={() => this.setState({ isPaneOpenLeft: false })}
      >
        <div>And I am pane content on left.</div>
      </SlidingPane>

        </div>
    );
  }
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
