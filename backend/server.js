const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001; // Choose an appropriate port number

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-email-password'   // Replace with your email password
  }
});

app.post('/send-email', (req, res) => {
  const { email, phone } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com', // Your email to receive the form data
    subject: 'New Contact Form Submission',
    text: `Email: ${email}\nPhone: ${phone}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
