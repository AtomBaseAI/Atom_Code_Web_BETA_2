import { NextResponse } from "next/server";

/**
 * DB-free contact endpoint (fully static site — no database).
 * Validates the submission and logs it to the server console so the
 * Atom Code team can pick it up from server logs / monitoring.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const phone = String(body.phone ?? "").trim();
    const topic = String(body.topic ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required." },
        { status: 400 }
      );
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long (max 5000 characters)." },
        { status: 400 }
      );
    }

    // No persistence: log for the team and acknowledge.
    console.info("[contact] new enquiry:", {
      name: name.slice(0, 200),
      email,
      phone: phone ? phone.slice(0, 40) : undefined,
      topic: topic ? topic.slice(0, 120) : undefined,
      message: message.slice(0, 5000),
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { ok: true, id: `enq_${Date.now()}`, message: "Message received." },
      { status: 201 }
    );
  } catch (error) {
    console.error("[contact] failed:", error);
    return NextResponse.json(
      { error: "Could not send your message right now. Please try again." },
      { status: 500 }
    );
  }
}
