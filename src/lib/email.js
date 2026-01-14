import nodemailer from "nodemailer";
import { generateInvoice } from "@/lib/generateInvoice";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req) {
  try {
    const data = await req.json();

    // Generate invoice
    const invoicePath = await generateInvoice(data);
    const invoiceFileName = path.basename(invoicePath);

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
             <p>
             <a href="${process.env.NEXT_PUBLIC_SITE_URL}/api/download-invoice?file=${invoiceFileName}">
             Download Invoice</a>
             </p>`,
      attachments: [
        {
          filename: invoiceFileName,
          path: path.join(process.cwd(), "public", invoicePath),
        },
      ],
    });

    return NextResponse.json({ success: true, invoicePath });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
