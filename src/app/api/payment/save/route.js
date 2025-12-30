import { connectDB } from "@/lib/mongodb";
import Payment from "@/models/payment";
import { generateInvoice } from "@/lib/generateInvoice";
import { sendInvoiceEmail } from "@/lib/sendEmail";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  const data = await req.json();

  const payment = await Payment.create(data);

  const invoicePath = await generateInvoice(payment);

  await sendInvoiceEmail(
    data.email || "client@example.com",
    invoicePath
  );

  return NextResponse.json({ success: true });
}
