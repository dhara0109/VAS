import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.RECEIVER_EMAIL,
        subject: `New contact form submission from ${name}`,
        text: message,
        html: `<p>You have a new contact form submission</p>
               <p><strong>Name: </strong> ${name}</p>
               <p><strong>Email: </strong> ${email}</p>
               <p><strong>Message: </strong> ${message}</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
};
