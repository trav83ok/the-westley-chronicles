// app/page.tsx
import { getStoryblokApi } from '@storyblok/react/rsc';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const sb = getStoryblokApi();
  const version = process.env.STORYBLOK_VERSION ?? 'published'; // 'draft' in preview mode
  const { data } = await sb.get('cdn/stories/home', { version });
  const story = data?.story;

  if (!story) return <main style={{ padding: 24 }}>No story found</main>;

  return (
    <main style={{ padding: 24 }}>
      <h1>{story.name}</h1>
      <pre>{JSON.stringify(story.content, null, 2)}</pre>
    </main>
  );
}
