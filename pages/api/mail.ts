import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const CONTACT_MESSAGE_FIELDS = {
  fullname: 'Name',
  email: 'Email',
  subject: 'Subject',
  message: 'Message'
};

const generateEmailContent = (data: Record<string, string>) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key as keyof typeof CONTACT_MESSAGE_FIELDS]}: \n${val} \n \n`),
    ''
  );

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<p align="left"><b>${CONTACT_MESSAGE_FIELDS[key as keyof typeof CONTACT_MESSAGE_FIELDS]}</b> <span>${val}</span></p>`);
  }, '');

  return {
    text: stringData,
    html: `<div>${htmlData}</div>`
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { fullname, email, message } = req.body;

    // Validar que los campos requeridos estén presentes
    if (!fullname || !email || !message) {
      return res.status(400).json({
        message: 'Missing required fields',
        received: { fullname, email, message }
      });
    }

    const { text, html } = generateEmailContent({ fullname, email, message });

    // Crear el transportador de correo
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Configurar el correo
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'marioccarloss@gmail.com',
      subject: `[marioroca.dev] Message from ${fullname}`,
      text,
      html,
      replyTo: email
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      message: 'Error sending email',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
