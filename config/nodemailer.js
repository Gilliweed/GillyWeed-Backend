const nodemailer = require("nodemailer");

const sendgridTransport = require("nodemailer-sendgrid-transport");
const User = require("../Database/User");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: "",
    },
  })
);
// transporter.sendMail({
//   to: "haniketyadav@gmail.com",
//   from: "no-reply@gmail.com",
//   subject: "Verification Code By GillyWeed",
//   html: "<H1>Hi This is for the Testing Purposes</H1>",
// });
module.exports = transporter;
