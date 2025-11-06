// lib/storyblok.ts
'use client';

import { storyblokInit, apiPlugin } from '@storyblok/react';

let _initialized = false;

export function initStoryblok() {
  if (_initialized) return;
  storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN, // set at runtime per mode below
    use: [apiPlugin],
    components: {
      // register your blocks here, e.g. 'hero': Hero,
    },
  });
  _initialized = true;
}
