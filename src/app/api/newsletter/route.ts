import { NextResponse } from "next/server";

/**
 * DB-free newsletter endpoint (fully static site — no database).
 * Validates the email and logs it to the server console so the
 * Atom Code team can pick subscribers up from server logs / monitoring.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const email = String(body?.email ?? "").trim().toLowerCase();

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // No persistence: log for the team and acknowledge.
    console.info("[newsletter] new subscriber:", {
      email,
      subscribedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { ok: true, message: "Subscribed! Watch your inbox for updates." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[newsletter] failed:", error);
    return NextResponse.json(
      { error: "Subscription failed. Please try again." },
      { status: 500 }
    );
  }
}
