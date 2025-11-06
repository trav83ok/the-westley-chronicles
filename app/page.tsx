import { getStoryblokApi } from "@storyblok/react/rsc";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const sb = getStoryblokApi();

  // ✅ make version a proper union that TS accepts
  const version: "published" | "draft" =
    process.env.STORYBLOK_VERSION === "draft" ? "draft" : "published";

  const { data } = await sb.get("cdn/stories/home", { version }); // types ok now
  const story = data?.story;

  if (!story) return <main style={{ padding: 24 }}>No story found</main>;

  return (
    <main style={{ padding: 24 }}>
      <h1>{story.name}</h1>
      <pre>{JSON.stringify(story.content, null, 2)}</pre>
    </main>
  );
}
