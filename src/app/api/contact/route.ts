import { NextResponse } from "next/server";
import { Resend } from "resend";

function requiredEnv(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(`${name} is missing`);
  }
  return value;
}

const apiKey = requiredEnv(process.env.RESEND_API_KEY, "RESEND_API_KEY");
const fromEmail = requiredEnv(
  process.env.CONTACT_FROM_EMAIL,
  "CONTACT_FROM_EMAIL",
);
const toEmail = requiredEnv(process.env.CONTACT_TO_EMAIL, "CONTACT_TO_EMAIL");

const resend = new Resend(apiKey);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({
        message: "Name, Email and Message are required",
        status: 400,
      });
    }
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Portfolio Enquiry from ${name}`,
      text: `
      Name :${name}
      Email:${email}
      Message:${message}`,
    });

    if (error) {
      return NextResponse.json(
        {
          message: "Failed to send email",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 },
    );
  }
}
