import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL = "rifatdhiyaullail@gmail.com";

function validate(input: Record<string, unknown>) {
  const errors: string[] = [];
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";

  if (!name || name.length < 2) errors.push("Nama minimal 2 karakter.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Format email tidak valid.");
  if (!message || message.length < 10) errors.push("Pesan minimal 10 karakter.");
  if (message.length > 2000) errors.push("Pesan maksimal 2000 karakter.");

  return { errors, data: { name, email, message } };
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { errors, data } = validate(body);

  if (errors.length > 0) {
    return NextResponse.json({ success: false, errors }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portofolio Rifat" <${EMAIL}>`,
      to: EMAIL,
      replyTo: data.email,
      subject: `Pesan dari ${data.name} — Portofolio`,
      text: `Nama: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #1d1d1f;">Pesan Baru dari Portofolio</h2>
          <p><strong>Nama:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <hr style="border: 1px solid #e3e3e8;" />
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, errors: ["Gagal mengirim email. Coba lagi nanti."] },
      { status: 500 }
    );
  }
}
