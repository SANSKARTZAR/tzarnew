import nodemailer from "nodemailer";

export async function sendInvoiceEmail(to, pdfPath) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Your Company" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Payment Successful – Invoice Attached",
    html: `
      <h2>Thank you for your payment</h2>
      <p>Your invoice is attached as a PDF.</p>
    `,
    attachments: [
      {
        filename: "invoice.pdf",
        path: pdfPath,
      },
    ],
  });
}
