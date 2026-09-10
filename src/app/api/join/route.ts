import { NextResponse } from "next/server";
import { saveSubmission } from "@/lib/submission-store";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const payload = await request.json();
  const saved = await saveSubmission("join", payload);

  return NextResponse.json({
    success: true,
    message: "Your membership application has been received.",
    data: saved,
  });
}
