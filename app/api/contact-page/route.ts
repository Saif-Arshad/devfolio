import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { firstName, lastName, email, message } = await req.json();

        if (!firstName || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,
            subject: "New Contact Form Submission",
            text: `You have a new contact form submission:
      
      Name: ${firstName} ${lastName && lastName}
      Email: ${email}
      Message: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email." },
            { status: 500 }
        );
    }
}
