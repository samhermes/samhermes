import type { CollectionEntry } from "astro:content";

export function slugRewrite(post: CollectionEntry<"posts">) {
  return {
    ...post,
    slug: post.id.replace(/^\d{4}-\d{2}-\d{2}-/, ""),
  } as CollectionEntry<"posts">;
}