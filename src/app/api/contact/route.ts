import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

// Helper function to validate phone number with country code
function isValidPhoneNumber(number: string) {
  // This regex allows an optional '+' at the start, followed by 1-3 digits for the country code and then the number
  // const phoneRegex = /^\+?[1-9]\d{1,3}\d{7,14}$/;
  const phoneRegex = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;
  return phoneRegex.test(number);
}

export async function POST(request: Request) {
  const { name, email, number, message } = await request.json();

  if (!name || !email || !message || !number) {
    return NextResponse.json(
      { error: "Name, email, number and message are required." },
      { status: 400 }
    );
  }

  // Validate phone number
  if (number && !isValidPhoneNumber(number)) {
    return NextResponse.json(
      { error: "Invalid phone number. Please include country code." },
      { status: 400 }
    );
  }

  if (message.length < 100) {
    return NextResponse.json(
      { error: "Message should be at least 100 character." },
      { status: 400 }
    );
  }

  // Save contact message in the database
  await prisma.contact.create({
    data: {
      name,
      email,
      number,
      message,
    },
  });

  // Configure nodemailer for sending emails
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  });

  // Send confirmation email to the user
  await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: email,
    subject: "Message Received",
    text: `Hello ${name},\n\nThank you for reaching out. I've received your message and will contact you soon.\n\nBest regards,\nSumit Saurav`,
  });

  // Send the email notification to yourself
  await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: process.env.NEXT_PUBLIC_EMAIL_USER,
    subject: "New Contact Form Submission",
    text: `You've received a new message from your website:\n\nName: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`,
  });

  return NextResponse.json({
    message: "Message received and emails sent successfully.",
  });
}
