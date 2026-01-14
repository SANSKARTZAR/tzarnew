import nodemailer from "nodemailer";
import { generateInvoice } from "@/lib/generateInvoice";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req) {
  const data = await req.json();

  const invoicePath = await generateInvoice(data); // e.g., /invoices/TZAR_Invoice_167889.pdf
  const invoiceFileName = path.basename(invoicePath);

  const downloadLink = `${process.env.NEXT_PUBLIC_SITE_URL}${invoicePath}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: `${data.email}, ${process.env.ADMIN_EMAIL}`,
    subject: "Payment Invoice",
    html: `<p>Hi ${data.customerName},</p>
           <p>Thank you for your payment.</p>
           <p>
             <a href="${downloadLink}" download="${invoiceFileName}">
               Download Invoice
             </a>
           </p>
           <p>Regards,<br/>Tzar Venture</p>`,
    attachments: [
      {
        filename: invoiceFileName,
        path: path.join(process.cwd(), "public/invoices", invoiceFileName),
      },
    ],
  });

  return NextResponse.json({ success: true, invoicePath });
}
