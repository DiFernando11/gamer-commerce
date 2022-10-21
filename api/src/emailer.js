const nodemailer = require('nodemailer')
//const nodemailerSendgrid = require ('nodemailer-sendgrid')

const createTrans = () => {
    let transport = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "baby.bode@ethereal.email",
          pass: "chvxwF2EFSPvv9YQ5q"
        }
      });
    
    return transport;
}

const sendMailUpd = async (user)=> {
    const transporter= createTrans()
    let info = await transporter.sendMail({
    from: '"FaztTech Server" <baby.bode@ethereal.email>', // a donde se va enviar la informacion del formulario
    to: `${user.email}`, 
    // en caso de ser mas de un mail ['mail1@mail.com',' mail2@mail.com']
    subject: `${user.name} tus datos se han actualizado`, // Asunto
    text: "Email de prueba ", // si enviamos un texto plano
    html: emailCambioDatos, // si enviamos un html como template
    });

    console.log ("Mensaje enviado:", info.messageId?info.messageId:"Se envio con sendgrid")
    return
}

exports.sendMail = (user) => sendMailUpd(user)