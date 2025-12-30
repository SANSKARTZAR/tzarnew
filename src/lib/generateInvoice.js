import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

export async function generateInvoice(payment) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]); // A4 size

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let y = 800;

  // Title
  page.drawText("INVOICE", {
    x: 50,
    y,
    size: 24,
    font: boldFont,
  });

  y -= 40;
  page.drawText(`Invoice ID: ${payment._id}`, { x: 50, y, size: 10, font });
  y -= 15;
  page.drawText(`Date: ${new Date().toDateString()}`, {
    x: 50,
    y,
    size: 10,
    font,
  });

  y -= 40;
  page.drawText("Services", { x: 50, y, size: 14, font: boldFont });

  y -= 20;

  payment.services.forEach((s) => {
    page.drawText(`${s.title}`, { x: 50, y, size: 10, font });
    page.drawText(`₹${s.price}`, { x: 450, y, size: 10, font });
    y -= 15;
  });

  y -= 20;
  page.drawText(`Subtotal: ₹${payment.subtotal}`, {
    x: 350,
    y,
    size: 10,
    font,
  });

  y -= 15;
  page.drawText(`GST (18%): ₹${payment.gst}`, {
    x: 350,
    y,
    size: 10,
    font,
  });

  if (payment.discount > 0) {
    y -= 15;
    page.drawText(`Discount: -₹${payment.discount}`, {
      x: 350,
      y,
      size: 10,
      font,
    });
  }

  y -= 20;
  page.drawText(`Total: ₹${payment.total}`, {
    x: 350,
    y,
    size: 12,
    font: boldFont,
  });

  const pdfBytes = await pdfDoc.save();

  const invoiceDir = path.join(process.cwd(), "invoices");
  if (!fs.existsSync(invoiceDir)) fs.mkdirSync(invoiceDir);

  const filePath = path.join(invoiceDir, `invoice-${payment._id}.pdf`);
  fs.writeFileSync(filePath, pdfBytes);

  return filePath;
}
