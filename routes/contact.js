const router = require("express").Router();
const nodemailer=require("nodemailer");




router.post("/api/contact", (req, res) => {
    async function sendMail(){
    // todo send email
    const testAccount =await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user:'testovtestov22@gmail.com', // 
      pass:'testing%%123' , // 
    },
  });
  const info = await transporter.sendMail({
    from: req.body.email, // sender address
    to: "aleksander.minchev18@gmail.com", // list of receivers
    replyTo:req.body.email,
    subject:req.body.subject, // Subject line
    text:"Email sent from:"+req.body.email+' /n Name: '+req.body.name+'/n Message: '+req.body.message+' ', // plain text body

  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  console.log("RESPONSE"+info.response);
  // Preview o+nly available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
sendMail().catch(console.error);
    console.log(req.body);
    res.redirect("/confirmation");
});

module.exports = {
    router
};