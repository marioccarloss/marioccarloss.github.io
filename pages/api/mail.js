import { mailOptions, transporter } from '../../config/nodemailer'

const CONTACT_MESSAGE_FIELDS = {
  fullname: 'Name',
  email: 'Email',
  subject: 'Subject',
  message: 'Message'
}

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ''
  )

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<p align="left"><b>${CONTACT_MESSAGE_FIELDS[key]}</b> <span>${val}</span></p>`)
  }, '')

  return {
    text: stringData,
    html: `<div>${htmlData}</div>`
  }
}

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body

    if (!data) {
      return res.status(400).send({ message: 'Bad request' })
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(JSON.parse(data)),
        subject: 'Mensaje recibido desde marioroca.dev'
      })

      return res.status(200).json({ success: true })
    } catch (err) {
      console.log(err)
      return res.status(400).json({ message: (err).message })
    }
  }

  return res.status(400).json({ message: 'Bad request' })
}

export default handler
