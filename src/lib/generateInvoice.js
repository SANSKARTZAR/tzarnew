import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit/js/pdfkit.standalone.js"; // ✅ Use standalone version

/**
 * Generates PDF invoice safely for Next.js + Windows
 */
export function generateInvoice(data) {
  const invoiceDir = path.join(process.cwd(), "public/invoices");

  // Create folder if it doesn't exist
  if (!fs.existsSync(invoiceDir)) {
    fs.mkdirSync(invoiceDir, { recursive: true });
  }

  const fileName = `invoice_${Date.now()}.pdf`;
  const filePath = path.join(invoiceDir, fileName);

  // ✅ Use PDFKit standalone version (no Helvetica.afm)
  const doc = new PDFDocument({ size: "A4", margin: 50 });

  doc.pipe(fs.createWriteStream(filePath));

  // Header
  doc.font("Times-Roman") // Safe standard font included in standalone
     .fontSize(22)
     .text("Payment Invoice", { align: "center" });
  doc.moveDown();

  // Customer info
  doc.fontSize(12);
  doc.text(`Name: ${data.customerName}`);
  doc.text(`Company Name: ${data.companyName || "-"}`);
  doc.text(`Email: ${data.customerEmail}`);
  doc.text(`Amount Paid: ₹${data.amount}`);
  doc.text(`Payment ID: ${data.paymentId}`);
  doc.text(`Date: ${new Date().toLocaleDateString()}`);
  doc.moveDown();

  // Services
  doc.text("Services Selected:", { underline: true });
  data.services.forEach((s, i) => {
    doc.text(`${i + 1}. ${s}`);
  });

  doc.moveDown();
  doc.text("Thank you for your payment!", { align: "center" });

  doc.end();

  return `/invoices/${fileName}`;
}
