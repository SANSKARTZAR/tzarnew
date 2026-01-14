import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const file = searchParams.get("file"); // only filename, e.g., invoice_167889.pdf

  if (!file) {
    return NextResponse.json({ error: "File not specified" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "public/invoices", file);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${file}"`, // force download
    },
  });
}
