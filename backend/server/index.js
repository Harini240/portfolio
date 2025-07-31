const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'harini200524@gmail.com',   // Your Gmail address
      pass: 'klui sali mgwh lrrz',   // Your Gmail App Password
    },
  });

  const mailOptions = {
    from: 'Portfolio Contact Form <' + process.env.EMAIL_USER + '>',
    to: process.env.EMAIL_USER, // Send to yourself
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    replyTo: email, // Lets you reply directly to the sender
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
