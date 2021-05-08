const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'easemytripcare2021@gmail.com',
    pass: 'nikeasemytrip1998' // naturally, replace both with your real credentials or an application-specific password
  }
});

const mailOptions = {
  from: 'easemytripcare2021@gmail.com',
  to: 'nikeshghatuary@gmail.com,nikesh.btech.cs17@iiitranchi.ac.in',
  subject: 'Booking confirmation',
  text: 'Dudes, we really need your money.'
};

// const mailOptions2 = {
//   from: 'easemytripcare2021@gmail.com',
//   to: 'nikesh.btech.cs17@iiitranchi.ac.in',
//   subject: 'Booking confirmation',
//   text: 'Dudes, we really need your money.'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
// 	console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

function email(){
	console.log("Called");
	transporter.sendMail(mailOptions, function(error, info){
  	if (error) {
	console.log(error);
  	} else {
    console.log('Email sent: ' + info.response);
    //res.render('thankyou');
    //next();
    //window.location.replace("/");

    console.log(window.location);
  	}
});
}

router.get('/thankyou', async (req, res) => {
  console.log("Called");
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
  console.log(error);
    } else {
    console.log('Email sent: ' + info.response);
    //res.render('thankyou');
    //next();
    //window.location.replace("/");

    console.log(window.location);
    }
});


  res.render('thankyou');
});




module.exports = router; 