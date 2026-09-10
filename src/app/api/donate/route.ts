import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  return NextResponse.json({
    success: true,
    message: "Thank you for your generosity. Your donation request has been received.",
    data: payload,
  });
}
