import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";

export async function generateInvoice(data) {
  const invoiceName = `invoice_${Date.now()}.pdf`;
  const invoicePath = path.join(
    process.cwd(),
    "public/invoices",
    invoiceName
  );

  if (!fs.existsSync("public/invoices")) {
    fs.mkdirSync("public/invoices", { recursive: true });
  }

  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(invoicePath));

  doc.fontSize(18).text("Your Company Name", { align: "center" });
  doc.moveDown();

  doc.fontSize(12).text(`Name: ${data.name}`);
  doc.text(`Email: ${data.email}`);
  doc.text(`Amount Paid: ₹${data.amount}`);
  doc.moveDown();

  doc.text("Services:");
  data.services.forEach((s) => doc.text(`• ${s}`));

  doc.moveDown();
  doc.text("Thank you for your payment!");

  doc.end();

  return `/invoices/${invoiceName}`;
}
