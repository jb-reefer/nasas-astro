import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE } from "../consts";

export async function GET(context) {
  const posts = await getCollection("news");
  return rss({
    title: SITE_TITLE,
    description: "Placeholder",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/news/${post.id}/`,
    })),
  });
}
