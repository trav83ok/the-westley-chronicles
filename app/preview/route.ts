// app/preview/route.ts
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("_storyblok_tk");

  if (!secret) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  // ✅ Next 16: draftMode() is async
  const dm = await draftMode();
  dm.enable();

  const to = searchParams.get("path") || "/";
  return NextResponse.redirect(new URL(to, request.url));
}
