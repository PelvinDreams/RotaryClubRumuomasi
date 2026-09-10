import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  return NextResponse.json({
    success: true,
    message: "Your membership application has been received.",
    data: payload,
  });
}
