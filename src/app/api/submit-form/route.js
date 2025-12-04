import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const data = await req.json();

    // 1️⃣ Save to MongoDB
    const client = await clientPromise;
    const db = client.db("contact_db");
    const collection = db.collection("contacts");

    const mongoDoc = {
      fullname: data.fullname || "",
      email: data.email || "",
      phone: data.phone || "",
      services: data.services || "",
      city: data.city || "",
      country: data.country || "",
      checkbox: data.checkbox || "",
      createdAt: new Date(),
    };

    await collection.insertOne(mongoDoc);

    // 2️⃣ Send to Google Sheets
    try {
      const resSheets = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mongoDoc),
      });

      const sheetsResult = await resSheets.json();
      console.log("Sheets result:", sheetsResult);
    } catch (err) {
      console.error("Error sending to Google Sheets:", err);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("Error in /api/submit-contact:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
