// app/preview/route.ts
import { draftMode } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('_storyblok_tk');

  // You can add your own verification here if desired
  if (!secret) return NextResponse.json({ ok: false }, { status: 401 });

  draftMode().enable();

  // Switch token + version for the client
  process.env.NEXT_PUBLIC_STORYBLOK_TOKEN = process.env.STORYBLOK_PREVIEW_TOKEN;
  process.env.STORYBLOK_VERSION = 'draft';

  const to = searchParams.get('path') || '/';
  return NextResponse.redirect(new URL(to, request.url));
}
