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
  const smtpPort = emailServerUrlObject.port || 587; // Default SMTP port
  const smtpUser = emailServerUrlObject.username;
  const smtpPass = emailServerUrlObject.password;

  // Configure the Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    auth: {
      user: smtpUser,
      pass: smtpPass,
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

  transporter.sendMail(mailOptions, (error, info) => {
    console.log("Email sent: " + info.response);
    // Return a success response
    return new Response(
      JSON.stringify({
        status: "success",
        message: "Email sent successfully",
      }),
    );
  });
}
