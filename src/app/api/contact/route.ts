import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function POST(req: Request) {
  const { email, message } = await req.json();

  const emailServerUrl = process.env.EMAIL_SERVER;

  if (!emailServerUrl) {
    throw new Error("EMAIL_SERVER env var not set");
  }

  const emailServerUrlObject = new URL(emailServerUrl);

  // Extract SMTP details from the URL
  const smtpHost = emailServerUrlObject.hostname;
  const smtpPort = emailServerUrlObject.port || 587;
  const smtpUser = emailServerUrlObject.username;
  const smtpPass = emailServerUrlObject.password;

  const transporter = nodemailer.createTransport({
    host: process.env.BREVO_HOST,
    port: 587,
    auth: {
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_PASSWORD,
    },
  } as SMTPTransport.Options);

  const mailOptions = {
    from: process.env.EMAIL_FROM, // Sender address
    to: process.env.CONTACT_EMAIL, // Receiver address
    replyTo: email,
    subject: "Contact Form Message", // Subject line
    text: `
 Message from: ${email}
 
 Message: 
 ${message}    
 
     `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return new Response(
      JSON.stringify({ status: "success", message: "Email sent successfully" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return new Response(
      JSON.stringify({ status: "error", message: "Failed to send email" }),
      { status: 500 },
    );
  }
}
