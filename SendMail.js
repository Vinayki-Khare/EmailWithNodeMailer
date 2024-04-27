const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {

    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'kirsten16@ethereal.email',
            pass: 'd23CK54hjDaFvsgHsj'
        }
    });

    let info = await transporter.sendMail({
        from: '"Vinayki Khare 👻" <kirsten16@ethereal.email>', // sender address
        to: "bar@example.com, baz@example.com, homeservices0710@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    })

    console.log("Message sent: %s", info.messageId);

    res.json(info);

}

module.exports = sendMail;