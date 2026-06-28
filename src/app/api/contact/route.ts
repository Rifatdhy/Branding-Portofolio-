import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const _to = formData.get("_to") as string;
    const _subject = formData.get("_subject") as string;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields required" },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(RESEND_API_KEY);

      const { error } = await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: _to || "rifatdhiyaullail@gmail.com",
        subject: _subject || "Pesan Baru dari Portfolio",
        html: `
          <h2>Pesan Baru dari Portfolio</h2>
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Pesan:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { success: false, error: "Failed to send email" },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
