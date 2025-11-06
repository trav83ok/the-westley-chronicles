// app/page.tsx
import { getStoryblokApi } from "@storyblok/react/rsc";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const version: "published" | "draft" =
    process.env.STORYBLOK_VERSION === "draft" ? "draft" : "published";

  try {
    const sb = getStoryblokApi();
    const { data } = await sb.get("cdn/stories/home", { version });
    const story = data?.story;

    if (!story) {
      return (
        <main style={{ padding: 24 }}>
          <h1>No story found</h1>
          <p>
            Create a Storyblok space, add a story with slug <code>home</code>,
            and set your tokens.
          </p>
        </main>
      );
    }

    return (
      <main style={{ padding: 24 }}>
        <h1>{story.name}</h1>
        <pre>{JSON.stringify(story.content, null, 2)}</pre>
      </main>
    );
  } catch {
    // Happens locally / on Vercel when tokens aren’t set yet
    return (
      <main style={{ padding: 24 }}>
        <h1>Storyblok not configured yet</h1>
        <ol>
          <li>Create a Storyblok space.</li>
          <li>
            Get tokens: <code>STORYBLOK_PUBLIC_TOKEN</code> and{" "}
            <code>STORYBLOK_PREVIEW_TOKEN</code>.
          </li>
          <li>
            Add env vars locally in <code>.env.local</code> and in Vercel
            Project → Settings → Environment Variables.
          </li>
        </ol>
      </main>
    );
  }
}
