// lib/storyblok.ts  (NO "use client")
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

const accessToken =
  process.env.STORYBLOK_VERSION === "draft"
    ? process.env.STORYBLOK_PREVIEW_TOKEN
    : process.env.STORYBLOK_PUBLIC_TOKEN;

export function initStoryblokServer() {
  // safe to call multiple times; storyblokInit is idempotent
  storyblokInit({
    accessToken,
    use: [apiPlugin],
    components: {
      // e.g. 'heading': Heading, (later)
    },
  });
}
