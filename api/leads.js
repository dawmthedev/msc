// api/leads.js (if using Next.js or similar)
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.LEADS_EMAIL,
      subject: "New HVAC Lead",
      text: JSON.stringify(req.body, null, 2),
    });

    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email" });
  }
}
