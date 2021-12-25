const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.REACT_APP_API_SENDGRID);

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.fullname}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'hello@marioroca.dev',
    from: 'hello@marioroca.dev',
    subject: 'New web form message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
  }

  mail.send(data);

  res.status(200).json({status: 'Ok'});
}