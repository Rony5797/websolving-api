const mongoose = require("mongoose");
var nodemailer = require("nodemailer");

exports.SendEmailUtility = async (EmailTo, EmailText, EmailSubject) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user: "patengaonline14no@gmail.com", pass: "online0099" },
    tls: { rejectUnauthorized: false },
  });

  let mailOptions = {
    from: "websolvings<info@teamrabbil.com>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  return await transporter.sendMail(mailOptions);
};
