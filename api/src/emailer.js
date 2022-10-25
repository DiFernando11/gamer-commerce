const nodemailer = require('nodemailer')
const nodemailerSendgrid = require ('nodemailer-sendgrid')
const {SENDGRID_API_KEY} = process.env;
const createTrans = () => {
    let transport = nodemailer.createTransport(
        nodemailerSendgrid({ apiKey : SENDGRID_API_KEY})    
      );
    
    return transport;
}

const sendMailUpd = async (user)=> {
    const transporter= createTrans()
    let info = await transporter.sendMail({
    from: '"FaztTech Server" <facundo.m0825@gmail.com>', // a donde se va enviar la informacion del formulario
    to: `${user.email}`, 
    // en caso de ser mas de un mail ['mail1@mail.com',' mail2@mail.com']
    subject: `${user.name} tus datos se han actualizado`, // Asunto
    text: "Email de prueba ", // si enviamos un texto plano
    html: '<h1>Prueba</h1>', // si enviamos un html como template
    });

    console.log ("Mensaje enviado:", info.messageId?info.messageId:"Se envio con sendgrid")
    return
}

exports.sendMail = (user) => sendMailUpd(user)