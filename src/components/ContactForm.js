import React, { Component }from 'react';
import Recaptcha from 'react-google-invisible-recaptcha';


import * as emailjs from 'emailjs-com'

import { withTranslation, Trans } from "react-i18next";
import { Translation } from 'react-i18next';
import { Form, Button, Row } from 'react-bootstrap';
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import{ init } from 'emailjs-com';
import'./Contactstyle.css';
init("user_bAkWfm080bvCjrCo5P8HI");


class ContactForm extends Component {
    constructor(props, context) {
    super(props, context);

  }

  state = {
    radio: '',
    message: '',
    textmessage:'',
    placeholdertext:'Do you wanna add a wolf talk? Or ask a question? You can do that here. \n Zde můžete přidat vlastní vlčí povídání nebo se na něco zeptat.',
    messageSent: false,
    wolfs: this.props.dataParentToChild,
    enable: true,

  }
   onChange(value) {
    console.log("Captcha value:", value);
  }
  handleSubmit(e) {
    e.preventDefault() 
    this.recaptcha.execute();
    
    var templateParams = {
      wolfs:this.state.wolfs,
      text: this.state.message,
      choose: this.state.radio
  };
     emailjs.send(
      'service_iur21la',
      'template_pzjf7f1',
       templateParams,
      'user_bAkWfm080bvCjrCo5P8HI'
     )
     console.log( templateParams)
     this.resetForm()
 }
 resetForm() {
    this.setState({
      
      radio:'',
      message: '',
      textmessage:'Thank you for the message, it will be reviewed and posted accordingly. \n Díky za zprávu, bude zkontrolována a následně zveřejněna.',
      enable:true,
    });
  }
  
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  }
  handlePlatformChange(event) {
    this.setState({ radio: event, enable: false });
  }
  
  onChange = (result) => {

    this.setState({
        verified: true,
        reCaptchaResponse: result,
    }) 
}; 
onResolved = () => {
  this.setState({messageSent: true})
  // Process Data //
  console.log(this.state);
}

  render() {
    const {wolfs} = this.state;

  return (
<div className="form">
      <form onSubmit={this.handleSubmit.bind(this)}>
      <Form.Group controlId="subject">
        <Row> 
          </Row>
          <Form.Label >{this.state.textmessage}</Form.Label>
          <Form.Control
          style={{height:"160px"}}
            as="textarea"
            name="message"
            value={this.state.message}
            rows="3"
            placeholder={this.state.placeholdertext}
            onChange={this.handleChange.bind(this, 'message')}
          />
              <ToggleButtonGroup 
              name="value"
              type="radio"
              value={this.state.radio}
              onChange={this.handlePlatformChange.bind(this)}
            >
              <ToggleButton value={"I am the wolf"}>
              <Translation>
                                {
                                    t =>  <text>{t("I am the wolf")}</text>
                                    }
                                </Translation> 
                </ToggleButton>
              <ToggleButton value={"I ask the wolf" }>
              <Translation>
                                {
                                    t =>  <text>{t("I ask the wolf")}</text>
                                    }
                                </Translation> 
                                </ToggleButton>
              </ToggleButtonGroup>

              <br/>
              <ToggleButtonGroup 
              name="value"
              type="radio"
              value={this.state.radio}
              onChange={this.handlePlatformChange.bind(this)}
            >
              <ToggleButton className="bottomr" value={"The wolf speaks"}>
              <Translation>
                                {
                                    t =>  <text>{t("The wolf speaks")}</text>
                                    }
                                </Translation> 
                               </ToggleButton>
              <ToggleButton className="bottor" value={"I speak"}>   
                                            <Translation>
                                {
                                    t =>  <text>{t("I speak")}</text>
                                    }
                                </Translation> 
                               </ToggleButton>
            </ToggleButtonGroup>
        </Form.Group>
        <Recaptcha
                        ref={ ref => this.recaptcha = ref }
                        sitekey="6LcazoQaAAAAAG9H25tNYY5qCmEB_YqkCCx7PuIa"
                        onResolved={ this.onResolved }
                    />
        <Button           disabled={this.state.enable}
 variant="primary" type="submit">
        <Translation>
                                {
                                    t =>  <text>{t("Submit")}</text>
                                    }
                                </Translation> 
        </Button>

      </form>
      <br/>
      <br/>

    </div>
  );
  }
};

export default ContactForm;
