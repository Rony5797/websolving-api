const mongoose = require("mongoose");
var nodemailer = require("nodemailer");

exports.SendEmailUtility = async (EmailTo, EmailText, EmailSubject) => {
  let transporter = nodemailer.createTransport({
    service: "gamil",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user: "rooneyhossain@gmail.com", pass: "twpq lwkp vyys bimu" },
    
  });

  let mailOptions = {
    from: "websolvings<rooneyhossain@gmail.com>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  return await transporter.sendMail(mailOptions);
};
