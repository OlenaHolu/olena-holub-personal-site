import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ error: 'Missing required fields' });

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'olenaholub.dev@gmail.com',
        pass: 'cmpv vtgp ftla kwje', 
      },
    });

    await transporter.sendMail({
      from: '"Portfolio Contact Form" <olenaholub.dev@gmail.com>',
      to: 'olenaholub.dev@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Mensaje: ${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error al enviar email:', err);
    return res.status(500).json({ error: 'Error al enviar mensaje' });
  }
}
