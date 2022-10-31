const nodemailer = require('nodemailer')
const nodemailerSendgrid = require ('nodemailer-sendgrid')
const {SENDGRID_API_KEY} = process.env;


const createTrans = () => {
    
    let transport = nodemailer.createTransport(
        nodemailerSendgrid({ apiKey : SENDGRID_API_KEY})    
      );
    
    return transport;
}

 
const sendMailUpd = async ( email, name, games)=> {
   const transporter= createTrans()
   let info = await transporter.sendMail({
   from: '"Game-loop-commerce" <game.loop.commerce@gmail.com>', // a donde se va enviar la informacion del formulario
   to:  `${email}`,
   //to:  `clavijovarela@gmail.com`,  
   // en caso de ser mas de un mail ['mail1@mail.com',' mail2@mail.com']
   //subject: `${users.name} Tus descuentos disponibles`, // Asunto
   subject: ` Tus descuentos disponibles`, // Asunto
  
   html: `  
   
            // {games && 
            // games.map((usuario,index)=>(
            //   <div key= {index}>  
            //     <h1>{usuario.name}</h1>
            //     <h3>{usuario.price}</h3>
            //     <h2>{usuario.discount}</h2>
            //     <img src={usuario.image} alt={usuario.name} />
            //     </div>
            // ))}
          
   ` // si enviamos un html como template, // si enviamos un html como template
   });

   

    console.log ("Mensaje enviado:", info.messageId?info.messageId:"Se envio con sendgrid")
    return

 
 // console.log(email)
}

exports.sendMail = (email,name, games) => sendMailUpd(email,name, games)