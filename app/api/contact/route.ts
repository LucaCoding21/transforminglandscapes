import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM =
  process.env.CONTACT_FROM_EMAIL ??
  "Transforming Landscapes <transforminglandscapes@cloverfield.studio>";
const TO = process.env.CONTACT_TO_EMAIL ?? "info@reibc.org";
const CC = process.env.CONTACT_CC_EMAIL
  ? process.env.CONTACT_CC_EMAIL.split(",").map((s) => s.trim()).filter(Boolean)
  : undefined;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: {
    name?: unknown;
    email?: unknown;
    organization?: unknown;
    message?: unknown;
  };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const organization =
    typeof payload.organization === "string" ? payload.organization.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (name.length > 200 || email.length > 200 || organization.length > 200) {
    return NextResponse.json({ error: "Field too long." }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 },
    );
  }

  const subject = `New contact form message from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    organization ? `Organization: ${organization}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const labelStyle =
    "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: #8b7355; padding: 0 0 6px;";
  const valueStyle =
    "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #1a1612; padding: 0 0 24px;";

  const row = (label: string, value: string) => `
    <tr><td style="${labelStyle}">${label}</td></tr>
    <tr><td style="${valueStyle}">${value}</td></tr>
  `;

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f8f5f0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8f5f0;">
      <tr>
        <td align="center" style="padding: 48px 24px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border: 1px solid #f0ebe3;">
            <tr>
              <td style="padding: 32px 40px 24px; border-bottom: 1px solid #f0ebe3;">
                <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 0.25em; text-transform: uppercase; color: #8b7355;">
                  Transforming Landscapes
                </p>
                <h1 style="margin: 12px 0 0; font-family: Georgia, 'Times New Roman', serif; font-size: 26px; line-height: 1.2; font-weight: 400; color: #1a1612; letter-spacing: -0.01em;">
                  New message from the contact form.
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px 40px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  ${row("Name", escapeHtml(name))}
                  ${row("Email", `<a href="mailto:${escapeHtml(email)}" style="color: #1a1612; text-decoration: none; border-bottom: 1px solid #ddd0bc;">${escapeHtml(email)}</a>`)}
                  ${organization ? row("Organization", escapeHtml(organization)) : ""}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 40px 40px;">
                <p style="${labelStyle} margin: 0;">Message</p>
                <div style="margin-top: 12px; padding: 20px 24px; background-color: #f8f5f0; border-left: 3px solid #5a7247; font-family: Georgia, 'Times New Roman', serif; font-size: 16px; line-height: 1.6; color: #1a1612; white-space: pre-wrap;">${escapeHtml(message)}</div>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 40px 28px; border-top: 1px solid #f0ebe3;">
                <p style="margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 12px; line-height: 1.6; color: #8b7355;">
                  Sent from the contact form at transforminglandscapes.ca.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      cc: CC,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 },
    );
  }
}
