var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'juanjoselondonodavid@gmail.com',
    pass: 'Epslceb2v'
  }
});

var mailOptions = {
  from: 'juanjoselondonodavid@gmail.com',
  to: 'juanjoselondonodavid@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});