import nodemailer from 'nodemailer';
let transporter = nodemailer.createTransport({
    host : "smtp-relay.brevo.com",
    port : 587,
    secure : false,
    auth : {
        user : "8e3a1c001@smtp-brevo.com",
        pass : "Js3Irvy9O0HqECka"
    }
})


let SendMail = async(to, sub, msg)=>{
    let mailOpt = {
        from : "farhan.ahmed0621@gmail.com",
        to : to,
        subject : sub,
        html : msg
    }

    await transporter.sendMail(mailOpt)
}


export default SendMail;

