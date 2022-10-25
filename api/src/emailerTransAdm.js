const nodemailer = require('nodemailer')
require("dotenv").config();
//const nodemailerSendgrid = require ('nodemailer-sendgrid')


const createTrans = () => {
    let transport = nodemailer.createTransport({  
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
        user: "lelia.quitzon@ethereal.email",
        pass: "mWMekCzKQtSqSnvGJp"
        }
      
});
    
    return transport;
}

const  sendTransAdm = async (user)=> {
    const transporter= createTrans()
    let info = await transporter.sendMail({
    from: '"FaztTech Server" <lelia.quitzon@ethereal.email>', // a donde se va enviar la informacion del formulario
    to: `clavijovarela@gmail.com`, 
    
    subject: `Transacción  ${user.name}`, // Asunto
    text: `
          - stripeId:  ${user.stripeId}
          - usuario:  ${user.userId}
          - importe:  ${user.amount}
          - carrito:  ${user.cart}
          - "procesar transaccion"`, // si enviamos un texto plano
    html: "", // si enviamos un html como template
    });

    console.log ("Mensaje enviado:", info, user)
    return
}


exports.sendMail = (user) => sendTransAdm(user)