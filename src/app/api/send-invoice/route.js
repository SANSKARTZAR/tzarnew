import nodemailer from "nodemailer";
import { generateInvoice } from "@/lib/generateInvoice";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const invoicePath = generateInvoice(data);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: `${data.email}, ${process.env.ADMIN_EMAIL}`,
    subject: "Payment Invoice",
    html: `<p>Thank you for your payment.</p>
           <a href="${process.env.NEXT_PUBLIC_SITE_URL}${invoicePath}">
           Download Invoice</a>`,
    attachments: [
      {
        path: `public${invoicePath}`,
      },
    ],
  });

  return NextResponse.json({ invoicePath });
}
