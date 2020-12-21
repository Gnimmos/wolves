import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row } from 'react-bootstrap';
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const [state, setState] = useState({
    message: '',
    radio: '',
  });
  const [result, setResult] = useState(null);
  const [value] = React.useState(null);   
  const sendEmail = event => {
    event.preventDefault();
    axios
      .post('/send', { ...state })
      .then(response => {

        setResult(response.data);
        setState({
          message: '',
          radio: '',
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      });
  };
  const handleChange = val => setState(
    {
      ...state,
      radio:val
    }
  );

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <div>
      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
                  </p>
      )}
      <form onSubmit={sendEmail}>
      <Form.Group controlId="subject">
        <Row> 
          </Row>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Enter your message"
            onChange={onInputChange}
          />
              <ToggleButtonGroup
              name="value"
              type="radio"
              value={value}
              onChange={handleChange}
            >
              <ToggleButton value={"I am the wolf"}>I am the wolf</ToggleButton>
              <ToggleButton value={"I ask the wolf" }>I ask the wolf</ToggleButton>
              <ToggleButton value={"The wolf speaks"}>The wolf speaks</ToggleButton>
              <ToggleButton value={"I speak"}>I speak</ToggleButton>
            </ToggleButtonGroup>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
