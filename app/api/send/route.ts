import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY); // set your Resend API key in .env

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { name, email, mobile, location, product, message } = data;

    await resend.emails.send({
      // from: "Test <onboarding@resend.com>",
      from: "Query on SGS Technical Solutions <admin@sgstechnicalsolutions.com>",
      to: "sales@sgstechnicalsolutions.com",
      // to: "sparshpathak2.0@gmail.com",
      subject: `New Query from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
