const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email, //  email address
    pass: process.env.password // email password
  }
});

module.exports = transporter;
