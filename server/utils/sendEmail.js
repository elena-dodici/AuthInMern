const nodemailer = require("nodemailer");
require('dotenv').config();

module.exports = async (email, subject, text) => {
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: process.env.EMAIL_PORT,
            service: process.env.SERVICE,
            //why fasle?
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.NODEMAILER_EMAIL, // generated ethereal user
                pass: process.env.NODEMAILER_PASSWORD, // generated ethereal password
            },
        });
        await transporter.sendMail({
            from: process.env.NODEMAILER_EMAIL,
            to : testemail,
            subject : "I am your darling",
            text: "this is the text msg",
            html: "<b> Hello? </b>"
        })
        console.log("email send successful")

    }catch(error){
        console.log("email failed");
        console.log(error)
    }
}