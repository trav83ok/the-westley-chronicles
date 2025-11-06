// lib/storyblok.ts  (NO "use client")
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

let initialized = false;

export function initStoryblokServer() {
  if (initialized) return;

  const version =
    process.env.STORYBLOK_VERSION === "draft" ? "draft" : "published";

  // Use preview token for drafts, public for published
  const accessToken =
    version === "draft"
      ? process.env.STORYBLOK_PREVIEW_TOKEN
      : process.env.STORYBLOK_PUBLIC_TOKEN;

  // If you haven't created a Storyblok space yet, just skip init (prevents build crash)
  if (!accessToken) {
    initialized = true;
    return;
  }

  storyblokInit({
    accessToken,
    use: [apiPlugin],
    components: {
      // register components here later, e.g. 'heading': Heading
    },
  });

  initialized = true;
}
