const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const fs = require('fs');

const app = express();

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
   console.log('reply received');
   res.render('contact', { msg: 'Professor says: Yes!' });
  
});


app.get('/no', (req, res) => {
    console.log('reply received');
    res.render('contact', { msg: 'Professor says: No!' });
});


app.post('/send', (req, res) => {
      let yesUrl = req.protocol + '://' + req.get('host') + '/yes';

      let noUrl = req.protocol + '://' + req.get('host') + '/no';
   
const output = `
    
    <h3>New Message</h3>
    <ul>  
      <li>File: ${req.body.file}</li>
      <li>Reason: ${req.body.reason}</li>
      <li>Name: ${req.body.name}</li>
      <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
      <p> ${yesUrl} | ${noUrl} </p>`;


/*fs.appendFile('msg.json', 'Hello content!', function (err) { // save message sent into json file
        if (err) throw err;
        console.log('Saved!');
    }); */

  // create reusable transporter object using the default SMTP transport
  
      console.log(output);

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: '486app@gmail.com', // generated ethereal user
        pass: 'four86p@$$w0rd'  // generated ethereal password
      //pass: 'four86p@$$w0rd'
      },
    tls:{
      rejectUnauthorized:false
    }
    
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"T2M" <486app@gmail.com', // sender address
      to: 'jlwamba@una.edu', // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg:'Email has been sent'});
  });
  });

app.listen(process.env.PORT || 3000, () => console.log('Server started at localhost:3000...'));
