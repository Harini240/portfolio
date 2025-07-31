// server/index.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'harini200524@gmail.com',        
      pass: 'klui sali mgwh lrrz',          
    },
  });

  const mailOptions = {
    from: email,
    to: 'harini200524@gmail.com',           
    subject: `Message from ${name}`,
    text: message,
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
