import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ===== メモリ上の送信履歴 =====
const sendHistory = new Map<
  string,
  number[] // timestamps
>();

const LIMIT = 2;
const WINDOW_MS = 60 * 60 * 1000; // 60分

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!email || !message || !name) {
      return NextResponse.json(
        { error: "invalid request" },
        { status: 400 }
      );
    }

    // ===== 送信回数制限 =====
    const now = Date.now();
    const history = sendHistory.get(email) || [];

    const recent = history.filter(
      (t) => now - t < WINDOW_MS
    );

    if (recent.length >= LIMIT) {
      return NextResponse.json(
        {
          error:
            "このメールアドレスからは60分に2回まで送信できます。",
        },
        { status: 429 }
      );
    }

    recent.push(now);
    sendHistory.set(email, recent);

    // ===== Gmail SMTP（安定版）=====
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your@gmail.com
        pass: process.env.MAIL_PASS, // アプリパスワード16桁
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: "お問い合わせが届きました",
      text: `
名前: ${name}
メール: ${email}

${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "server error" },
      { status: 500 }
    );
  }
}
