const path = require('path');
const express = require('express');
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: process.env.email, // list of receivers
      subject: req.body.subject, // Subject line
      html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Message: ${req.body.message}</li>
        <li>Message: ${req.body.radio}</li>

      </ul>
      `
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for submiting your voice. After appruval your statement will be published here.'
        });
      }    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong and i catched the error. Try again later'
    });
  }
});

app.listen(3030, () => {
  console.log('server start on port 3030');
});
