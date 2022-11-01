const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const createTrans = () => {
	let transport = nodemailer.createTransport(
		nodemailerSendgrid({ apiKey: process.env.SENDGRID_API_KEY })
	);

	return transport;
};

const template = (games) => {
	const product = games.map((game) => {
		return `
  <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 50px 10px 50px;" bgcolor="#FFFFFF" data-distribution="3,1">
    <tbody>
      <tr role="module-content">
        <td height="100%" valign="top"><table width="375" style="width:375px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="27ac900f-e0f3-4b6f-8143-9077aa8f08a7.2.1.1" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:0px 0px 0px 0px; line-height:32px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h1 style="text-align: inherit; font-family: inherit"><span style="font-family: &quot;arial black&quot;, helvetica, sans-serif; color: #064962; font-size: 32px">${game.name}</span></h1><div></div></div></td>
      </tr>
    </tbody>
  </table></td>
        </tr>
      </tbody>
    </table><table width="125" style="width:125px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="27ac900f-e0f3-4b6f-8143-9077aa8f08a7.1.1.2.1" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:10px 0px 0px 0px; line-height:0px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h1 style="text-align: right; font-family: inherit"><span style="font-family: &quot;arial black&quot;, helvetica, sans-serif; color: #064962; font-size: 26px">U$D${game.discount}</span></h1>
<h1 style="text-align: right"><span style="color: #064962; font-family: &quot;arial black&quot;, helvetica, sans-serif; font-size: 10px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline">ORIGINAL: U$D ${game.price},00</span></h1><div></div></div></td>
      </tr>
    </tbody>
  </table></td>
        </tr>
      </tbody>
    </table></td>
      </tr>
    </tbody>
  </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 50px 0px 50px;" bgcolor="#FFFFFF" data-distribution="1,2">
    <tbody>
      <tr role="module-content">
        <td height="100%" valign="top"><table width="163" style="width:163px; border-spacing:0; border-collapse:collapse; margin:0px 5px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="cfd69932-c6f0-468d-88f8-adfc08ba9a56" data-mc-module-version="2019-10-22">
  </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="3f2c4326-d091-4fb8-aba8-65cb7571f432.3">
      <tbody>
        <tr>
          <td align="left" bgcolor="" class="outer-td" style="padding:0px 0px 25px 0px;">
            <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
              <tbody>
                <tr>
                <td align="center" bgcolor="#064962" class="inner-td" style="border-radius:6px; font-size:16px; text-align:left; background-color:inherit;">
                  <a href="https://gamer-commerce.vercel.app/detail/${game.id}" style="background-color:#064962; border:0px solid #333333; border-color:#333333; border-radius:0px; border-width:0px; color:#ffffff; display:inline-block; font-size:11px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 15px 12px 15px; text-align:center; text-decoration:none; border-style:solid; font-family:arial black, helvetica, sans-serif;" target="_blank">SHOP GAME</a>
                </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table></td>
        </tr>
      </tbody>
    </table><table width="326" style="width:326px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 5px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="c253eb39-cfa1-4896-9b9e-ad482d9b6c40">
    <tbody>
      <tr>
        <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
          <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="163" alt="" data-proportionally-constrained="true" data-responsive="true" src=${game.image}>
        </td>
      </tr>
    </tbody>
  </table></td>
        </tr>
      </tbody>
    </table></td>
      </tr>
    </tbody>
  </table>
  `;
	});

	const email = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <!--<![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    body {width: 600px;margin: 0 auto;}
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
<![endif]-->
      <style type="text/css">
    body, p, div {
      font-family: arial,helvetica,sans-serif;
      font-size: 14px;
    }
    body {
      color: #000000;
    }
    body a {
      color: #FFFFFF;
      text-decoration: none;
    }
    p { margin: 0; padding: 0; }
    table.wrapper {
      width:100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    img.max-width {
      max-width: 100% !important;
    }
    .column.of-2 {
      width: 50%;
    }
    .column.of-3 {
      width: 33.333%;
    }
    .column.of-4 {
      width: 25%;
    }
    ul ul ul ul  {
      list-style-type: disc !important;
    }
    ol ol {
      list-style-type: lower-roman !important;
    }
    ol ol ol {
      list-style-type: lower-latin !important;
    }
    ol ol ol ol {
      list-style-type: decimal !important;
    }
    @media screen and (max-width:480px) {
      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }
      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }
      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }
      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }
      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }
      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .columns {
        width: 100% !important;
      }
      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      .social-icon-column {
        display: inline-block !important;
      }
    }
  </style>
      <!--user entered Head Start--><!--End Head user entered-->
    </head>
    <body>
      <center class="wrapper" data-link-color="#FFFFFF" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#064962;">
        <div class="webkit">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#064962">
            <tr>
              <td valign="top" bgcolor="#064962" width="100%">
                <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="100%">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <!--[if mso]>
    <center>
    <table><tr><td width="600">
  <![endif]-->
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                      <tr>
                                        <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
    <tr>
      <td role="module-content">
        <p>Deals for this week!</p>
      </td>
    </tr>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="9fda0fbb-1541-4437-afe9-a180b235530d" data-mc-module-version="2019-10-22">
  </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#FFFFFF" data-distribution="1">
    <tbody>
      <tr role="module-content">
        <td height="100%" valign="top"><table width="320" style="width:320px; border-spacing:0; border-collapse:collapse; margin:0px 140px 0px 140px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="6a5f3a24-3357-4bf8-aa10-1964a7aa9b03">
          <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:80% !important; width:80%; height:auto !important;" width="256" alt="" data-proportionally-constrained="true" data-responsive="true" src="https://res.cloudinary.com/drkv8ebxx/image/upload/v1667337345/Images/mgow2zjrv2det5blsacg.png">
    <tbody>
      <tr>
        <td style="font-size:6px; line-height:10px; padding:20px 0px 20px 0px;" valign="top" align="center">
        <h1 style="text-align: center; font-family: inherit"><span style="font-family: &quot;arial black&quot;, helvetica, sans-serif; color: #064962; font-size: 20px">GAME-LOOP</span></h1>
        </td>
      </tr>
    </tbody>
  </table></td>
        </tr>
      </tbody>
    </table></td>
      </tr>
    </tbody>
  </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="e8d4bbbc-f950-4f1a-8984-5c9e30c81e48">
    <tbody>
      <tr>
        <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
          <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="600" alt="" data-proportionally-constrained="true" data-responsive="true" src="https://res.cloudinary.com/drkv8ebxx/image/upload/v1667315158/Images/kkjjjlnykgiz49azerft.jpg">
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="0dc3cfd6-e2b0-49ba-8965-53b2d91d4852.1" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:30px 0px 10px 0px; line-height:10px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h1 style="text-align: center; font-family: inherit"><span style="font-family: &quot;arial black&quot;, helvetica, sans-serif; color: #064962; font-size: 24px">DISCOUNTS ARE HERE,</span></h1>
<h1 style="text-align: center; font-family: inherit"><span style="font-family: &quot;arial black&quot;, helvetica, sans-serif; color: #064962; font-size: 24px">DISCOVER YOUR NEXT FAVORITE GAME!</span></h1><div></div></div></td>
      </tr>
    </tbody>
  </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="3f2c4326-d091-4fb8-aba8-65cb7571f432.1">
      <tbody>
        <tr>
          <td align="center" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
            <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
            </table>
          </td>
        </tr>
      </tbody>
    </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:40px 0px 0px 0px;" bgcolor="#FFFFFF" data-distribution="1">
    <tbody>
      <tr role="module-content">
        <td height="100%" valign="top"><table width="500" style="width:500px; border-spacing:0; border-collapse:collapse; margin:0px 50px 0px 50px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="25f3ab37-3e43-4dee-bc7b-ed8fa488bd5c">
    <tbody>
      <tr>
        <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
          
        </td>
      </tr>
    </tbody>
  </table></td>
        </tr>
      </tbody>
    </table></td>
      </tr>
    </tbody>
  </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 50px 0px 50px;" bgcolor="#FFFFFF" data-distribution="3,1">
    <tbody>
      <tr role="module-content">
        <td height="100%" valign="top"><table width="375" style="width:375px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="27ac900f-e0f3-4b6f-8143-9077aa8f08a7.2" data-mc-module-version="2019-10-22">
   
  </table></td>
        </tr>
      </tbody>
    </table><table width="125" style="width:125px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="27ac900f-e0f3-4b6f-8143-9077aa8f08a7.1.1" data-mc-module-version="2019-10-22">
    
  </table></td>
        </tr>
      </tbody>
    </table></td>
      </tr>
    </tbody>
  </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 50px 80px 50px;" bgcolor="#FFFFFF" data-distribution="1,1,1">
    <tbody>
      <tr role="module-content">
        <td height="100%" valign="top"><table width="160" style="width:160px; border-spacing:0; border-collapse:collapse; margin:0px 5px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="8164f255-c54b-4b16-ad0d-3c40c43de3b7">
    
  </table></td>
        </tr>
      </tbody>
    </table><table width="160" style="width:160px; border-spacing:0; border-collapse:collapse; margin:0px 5px 0px 5px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b19b2d34-0ef1-4e14-8938-5bc9806dc256">
    
  </table></td>
        </tr>
      </tbody>
    </table><table width="160" style="width:160px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 5px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-2">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="cfd69932-c6f0-468d-88f8-adfc08ba9a56.1" data-mc-module-version="2019-10-22">
    
  </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="3f2c4326-d091-4fb8-aba8-65cb7571f432.2">
      <tbody>
        <tr>
          <td align="left" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
            <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
            </table>
          </td>
        </tr>
      </tbody>
    </table></td>
        </tr>
      </tbody>
    </table></td>
      </tr>
    </tbody>
  </table> ${product.join('<br>')}
<table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:40px 50px 80px 50px;" bgcolor="#FFFFFF" data-distribution="1,1">
    <tbody>
      <tr role="module-content">
        <td height="100%" valign="top"><table width="245" style="width:245px; border-spacing:0; border-collapse:collapse; margin:0px 5px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="241b062f-93f2-4453-9b91-cb111cb69150.1">
    <tbody>
      <tr>
        <td style="padding:0px 0px 20px 0px;" role="module-content" bgcolor="">
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="27ac900f-e0f3-4b6f-8143-9077aa8f08a7.2.1.2.1" data-mc-module-version="2019-10-22">
    
  </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="4ca23730-25dd-4e59-bdcf-cbd0c33db4d5.1">
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="27ac900f-e0f3-4b6f-8143-9077aa8f08a7.1.1.2.2.1" data-mc-module-version="2019-10-22">
  
  </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="3f2c4326-d091-4fb8-aba8-65cb7571f432.4">
      <tbody>
        <tr>
          <td align="left" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
            <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
            </table>
          </td>
        </tr>
      </tbody>
    </table></td>
        </tr>
      </tbody>
    </table><table width="245" style="width:245px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 5px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="241b062f-93f2-4453-9b91-cb111cb69150">
    <tbody>
      <tr>
        <td style="padding:0px 0px 20px 0px;" role="module-content" bgcolor="">
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="27ac900f-e0f3-4b6f-8143-9077aa8f08a7.2.1.2" data-mc-module-version="2019-10-22">
   
  </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="65be5b2c-e6d1-4aaa-962c-3d49e894f555">
    
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="27ac900f-e0f3-4b6f-8143-9077aa8f08a7.1.1.2.2" data-mc-module-version="2019-10-22">
    
  </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="3f2c4326-d091-4fb8-aba8-65cb7571f432">
      <tbody>
        <tr>
          <td align="left" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
            <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
            </table>
          </td>
        </tr>
      </tbody>
    </table></td>
        </tr>
      </tbody>
    </table></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="8a8500f7-1498-4352-ba24-d2cc764127e6">
    <tbody>
      <tr>
        <td style="padding:0px 0px 40px 0px;" role="module-content" bgcolor="#064962">
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="social" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="ebf65df9-6f08-4fb3-beb8-0c0cc4ddefb8">
    <tbody>
      <tr>
        <td valign="top" style="padding:20px 0px 10px 0px; font-size:6px; line-height:10px;" align="center">
          <table align="center" style="-webkit-margin-start:auto;-webkit-margin-end:auto;">
            <tbody><tr align="center"><td style="padding: 0px 5px;" class="social-icon-column">
      <a role="social-icon-link" href="https://www.facebook.com/sendgrid/" target="_blank" alt="Facebook" title="Facebook" style="display:inline-block; background-color:#2b6175; height:21px; width:21px;">
        <img role="social-icon" alt="Facebook" title="Facebook" src="https://mc.sendgrid.com/assets/social/white/facebook.png" style="height:21px; width:21px;" height="21" width="21">
      </a>
    </td><td style="padding: 0px 5px;" class="social-icon-column">
      <a role="social-icon-link" href="https://twitter.com/sendgrid" target="_blank" alt="Twitter" title="Twitter" style="display:inline-block; background-color:#2b6175; height:21px; width:21px;">
        <img role="social-icon" alt="Twitter" title="Twitter" src="https://mc.sendgrid.com/assets/social/white/twitter.png" style="height:21px; width:21px;" height="21" width="21">
      </a>
    </td><td style="padding: 0px 5px;" class="social-icon-column">
      <a role="social-icon-link" href="https://www.instagram.com/sendgrid/" target="_blank" alt="Instagram" title="Instagram" style="display:inline-block; background-color:#2b6175; height:21px; width:21px;">
        <img role="social-icon" alt="Instagram" title="Instagram" src="https://mc.sendgrid.com/assets/social/white/instagram.png" style="height:21px; width:21px;" height="21" width="21">
      </a>
    </td><td style="padding: 0px 5px;" class="social-icon-column">
      <a role="social-icon-link" href="https://www.pinterest.com/sendgrid/" target="_blank" alt="Pinterest" title="Pinterest" style="display:inline-block; background-color:#2b6175; height:21px; width:21px;">
        <img role="social-icon" alt="Pinterest" title="Pinterest" src="https://mc.sendgrid.com/assets/social/white/pinterest.png" style="height:21px; width:21px;" height="21" width="21">
      </a>
    </td><td style="padding: 0px 5px;" class="social-icon-column">
      <a role="social-icon-link" href="https://www.linkedin.com/company/sendgrid/" target="_blank" alt="LinkedIn" title="LinkedIn" style="display:inline-block; background-color:#2b6175; height:21px; width:21px;">
        <img role="social-icon" alt="LinkedIn" title="LinkedIn" src="https://mc.sendgrid.com/assets/social/white/linkedin.png" style="height:21px; width:21px;" height="21" width="21">
      </a>
    </td></tr></tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#ffffff; font-size:10px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5"><div class="Unsubscribe--addressLine"><p class="Unsubscribe--senderName" style="font-family:arial,helvetica,sans-serif; font-size:10px; line-height:20px;">{{Sender_Name}}</p><p style="font-family:arial,helvetica,sans-serif; font-size:10px; line-height:20px;"><span class="Unsubscribe--senderAddress">{{Sender_Address}}</span>, <span class="Unsubscribe--senderCity">{{Sender_City}}</span>, <span class="Unsubscribe--senderState">{{Sender_State}}</span> <span class="Unsubscribe--senderZip">{{Sender_Zip}}</span></p></div><p style="font-family:arial,helvetica,sans-serif; font-size:10px; line-height:20px;"><a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank" style="color:#45bbdd;">Unsubscribe</a></p></div><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="098013cc-978f-4d8e-a9fc-5cf67bfbf7ab">
      <tbody>
        <tr>
          <td align="center" bgcolor="" class="outer-td" style="padding:20px 0px 20px 0px;">
            <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
            </table>
          </td>
        </tr>
      </tbody>
    </table></td>
                                      </tr>
                                    </table>
                                    <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  </html>
  
  `;
	return email;
};

const sendMailUpd = async (email, name, games) => {
	const transporter = createTrans();
	try {
		let info = await transporter.sendMail({
			from: '"Game-loop-commerce" <game.loop.commerce@gmail.com>', // a donde se va enviar la informacion del formulario
			to: email,
			//  to:  `clavijovarela@gmail.com`,
			//  en caso de ser mas de un mail ['mail1@mail.com',' mail2@mail.com']
			subject: `Discounts have arrived`, // Asunto
			//  subject: ` Tus descuentos disponibles`, // Asunto

			html: template(games), // si enviamos un html como template, // si enviamos un html como template
		});

		// console.log(template(games).join('<br>'))
		console.log(
			'Mensaje enviado:',
			info.messageId ? info.messageId : 'Se envio con sendgrid'
		);
		return { msg: 'Email sent.' };
	} catch (error) {
		console.log(error);
		return { msg: 'There was an error sending mail.' };
	}

	// console.log(email)
};

exports.sendMail = (email, name, games) => sendMailUpd(email, name, games);
