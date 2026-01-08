import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit/js/pdfkit.standalone.js";

export function generateInvoice(data) {
  const invoiceDir = path.join(process.cwd(), "public/invoices");

  if (!fs.existsSync(invoiceDir)) {
    fs.mkdirSync(invoiceDir, { recursive: true });
  }

  const fileName = `invoice_${Date.now()}.pdf`;
  const filePath = path.join(invoiceDir, fileName);

  const doc = new PDFDocument({ size: "A4", margin: 50 });
  doc.pipe(fs.createWriteStream(filePath));

  const pageWidth = doc.page.width;
  const startX = 50;
  const contentWidth = pageWidth - 100;

  // ✅ CLEAN AMOUNT (Fixes "'1" bug)
  const cleanAmount = (value) => {
    if (!value) return 0;

    let amount = value.toString().replace(/[^0-9.]/g, ""); // remove ' ₹ etc
    amount = Number(amount);

    // Razorpay sends paise sometimes
    if (amount > 1000) {
      amount = amount / 100;
    }

    return amount;
  };

  const formatMoney = (amount) => `₹${Number(amount).toLocaleString("en-IN")}`;

  const invoiceNo = `INV-${Date.now().toString().slice(-6)}`;
  const invoiceDate = new Date().toLocaleDateString();

  const totalAmount = cleanAmount(data.amount);

  const services = Array.isArray(data.services) ? data.services : [];

  const companyName =
    data.company ||
    data.companyName ||
    data.customerCompany ||
    "";

  /* ================= HEADER ================= */

  doc.rect(0, 0, pageWidth, 110).fill("#e0e0e0");

  doc.fillColor("#000000")
    .font("Times-Bold")
    .fontSize(20)
    .text("Tzar Venture", startX, 40);

  doc.font("Times-Roman")
    .fontSize(10)
    .text("yourcompany@email.com", startX, 70)
    .text("+91-XXXXXXXXXX", startX, 85);

  doc.rect(pageWidth - 150, 0, 150, 110).fill("#003366");

  doc.fillColor("#ffffff")
    .font("Times-Bold")
    .fontSize(20)
    .text("INVOICE", pageWidth - 130, 45);

  /* ================= BILL TO ================= */

  let y = 150;

  doc.fillColor("#000000").font("Times-Bold").fontSize(11);
  doc.text("BILL TO:", startX, y);

  y += 20;
  doc.font("Times-Roman").fontSize(12);
  doc.text(data.customerName || "-", startX, y);

  if (companyName.trim()) {
    y += 18;
    doc.text(companyName, startX, y);
  }

  y += 18;
  doc.text(data.customerEmail || "-", startX, y);

  /* ================= INVOICE META ================= */

  let metaY = 150;

  doc.font("Times-Bold").fontSize(11);
  doc.text("Invoice No:", 350, metaY);
  doc.font("Times-Roman").fontSize(12);
  doc.text(invoiceNo, 450, metaY);

  metaY += 20;
  doc.font("Times-Bold").text("Invoice Date:", 350, metaY);
  doc.font("Times-Roman").text(invoiceDate, 450, metaY);

  metaY += 20;
  doc.font("Times-Bold").text("Total Amount:", 350, metaY);
  doc.font("Times-Roman").text(formatMoney(totalAmount), 450, metaY);

  /* ================= SERVICES TABLE ================= */

  y += 60;

  const tableTop = y;
  const rowHeight = 30;

  doc.rect(startX, tableTop, contentWidth, rowHeight).fill("#003366");

  doc.fillColor("#ffffff").font("Times-Bold").fontSize(11);
  doc.text("SERVICE", startX + 10, tableTop + 8);

  y = tableTop + rowHeight;
  doc.fillColor("#000000").font("Times-Roman").fontSize(11);

  if (services.length === 0) {
    doc.rect(startX, y, contentWidth, rowHeight).stroke();
    doc.text("Service Payment", startX + 10, y + 8);
    y += rowHeight;
  } else {
    services.forEach((service) => {
      doc.rect(startX, y, contentWidth, rowHeight).stroke();
      doc.text(service, startX + 10, y + 8);
      y += rowHeight;
    });
  }

  /* ================= TOTAL ================= */

  y += 40;

  doc.font("Times-Bold").fontSize(12);
  doc.text("TOTAL:", startX + 300, y);
  doc.text(formatMoney(totalAmount), startX + 400, y);

  /* ================= FOOTER ================= */

  y += 80;

  doc.font("Times-Roman").fontSize(10);
  doc.text(
    "Thank you for your business! If you have any questions, please contact us.",
    startX,
    y,
    { align: "center", width: contentWidth }
  );

  doc.moveTo(startX + 380, y + 40).lineTo(startX + 520, y + 40).stroke();
  doc.text("Tzar Venture", startX + 390, y + 45);

  doc.end();

  return `/invoices/${fileName}`;
}




// import fs from "fs";
// import path from "path";
// import PDFDocument from "pdfkit/js/pdfkit.standalone.js"; // ✅ Use standalone version

// /**
//  * Generates PDF invoice safely for Next.js + Windows
//  */
// export function generateInvoice(data) {
//   const invoiceDir = path.join(process.cwd(), "public/invoices");

//   // Create folder if it doesn't exist
//   if (!fs.existsSync(invoiceDir)) {
//     fs.mkdirSync(invoiceDir, { recursive: true });
//   }

//   const fileName = `invoice_${Date.now()}.pdf`;
//   const filePath = path.join(invoiceDir, fileName);

//   // ✅ Use PDFKit standalone version (no Helvetica.afm)
//   const doc = new PDFDocument({ size: "A4", margin: 50 });

//   doc.pipe(fs.createWriteStream(filePath));

//   // Header
//   doc.font("Times-Roman") // Safe standard font included in standalone
//      .fontSize(22)
//      .text("Payment Invoice", { align: "center" });
//   doc.moveDown();

//   // Customer info
//   doc.fontSize(12);
//   doc.text(`Name: ${data.customerName}`);
//   doc.text(`Company Name: ${data.companyName || "-"}`);
//   doc.text(`Email: ${data.customerEmail}`);
//   doc.text(`Amount Paid: ₹${data.amount}`);
//   doc.text(`Payment ID: ${data.paymentId}`);
//   doc.text(`Date: ${new Date().toLocaleDateString()}`);
//   doc.moveDown();

//   // Services
//   doc.text("Services Selected:", { underline: true });
//   data.services.forEach((s, i) => {
//     doc.text(`${i + 1}. ${s}`);
//   });

//   doc.moveDown();
//   doc.text("Thank you for your payment!", { align: "center" });

//   doc.end();

//   return `/invoices/${fileName}`;
// }
