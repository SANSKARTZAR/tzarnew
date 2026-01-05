import crypto from "crypto";
import clientPromise from "../../../lib/mongodb";
import { generateInvoice } from "../../../lib/invoice";
import { sendEmail } from "../../../lib/email";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      customerName,
      customerEmail,
      amount,
      services,
    } = body;

    // 🔐 Verify Razorpay signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return Response.json({ success: false }, { status: 400 });
    }

    // 🔌 MongoDB
    const client = await clientPromise;
    const db = client.db();

    // 📄 Generate invoice
    const invoiceUrl = await generateInvoice({
      name: customerName,
      email: customerEmail,
      amount,
      services,
    });

    // 💾 Save payment
    await db.collection("payments").insertOne({
      name: customerName,
      email: customerEmail,
      amount,
      services,
      razorpayPaymentId: razorpay_payment_id,
      razorpayOrderId: razorpay_order_id,
      invoiceUrl,
      createdAt: new Date(),
    });

    // 📧 Email to client
    await sendEmail({
      to: customerEmail,
      subject: "Payment Successful",
      html: `
        <p>Hi ${customerName},</p>
        <p>Your payment was successful.</p>
        <p><b>Amount:</b> ₹${amount}</p>
        <p><b>Services:</b> ${services.join(", ")}</p>
        <a href="${process.env.NEXT_PUBLIC_SITE_URL}${invoiceUrl}">
          Download Invoice
        </a>
      `,
    });

    // 📧 Email to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: "New Payment Received",
      html: `
        <p><b>Name:</b> ${customerName}</p>
        <p><b>Email:</b> ${customerEmail}</p>
        <p><b>Amount:</b> ₹${amount}</p>
        <p><b>Services:</b> ${services.join(", ")}</p>
      `,
    });

    return Response.json({ success: true, invoiceUrl });
  } catch (err) {
    console.error("VERIFY PAYMENT ERROR:", err);
    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
