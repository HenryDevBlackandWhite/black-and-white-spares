import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      categoryId,
      categoryTitle,
      spare,
      name,
      phone,
      email,
      message,
    } = await req.json();

    if (!categoryId || !spare || !name || !email) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = `Spare Request: ${spare} (${categoryTitle || categoryId})`;

    const textBody = `
New spare request from the website:

Category: ${categoryTitle || categoryId}
Spare / Model: ${spare}

Customer Name: ${name}
Phone: ${phone || "-"}
Email: ${email}

Additional Message:
${message || "-"}

Please respond to the customer as soon as possible.
    `.trim();

    const htmlBody = `
      <h2>New Spare Request</h2>
      <p><strong>Category:</strong> ${categoryTitle || categoryId}</p>
      <p><strong>Spare / Model:</strong> ${spare}</p>
      <hr />
      <p><strong>Customer Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Additional Message:</strong></p>
      <p>${(message || "-").replace(/\n/g, "<br />")}</p>
    `;

    await transporter.sendMail({
      from: `"BWTS Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: ["lee@bwts.co.za", "media2@bwts.co.za"],
      subject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Error sending spare request email:", err);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
