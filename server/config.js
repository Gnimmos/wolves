const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "gnimmotest@gmail.com", //  email address
    pass: "gnimmtest1235" // email password
  }
});

module.exports = transporter;
