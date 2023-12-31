const mongoose = require("mongoose");
var nodemailer = require("nodemailer");

exports.SendEmailUtility = async (EmailTo, EmailText, EmailSubject) => {
  let transporter = nodemailer.createTransport({
    service: "gamil",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user: "patengaonline14no@gmail.com", pass: "etgc lqea qrmr qlf" },
    
  });

  let mailOptions = {
    from: "websolvings<patengaonline14no@gmail.com>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  return await transporter.sendMail(mailOptions);
};
