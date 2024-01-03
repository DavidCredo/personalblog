import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  if (blog == null) {
    return {
      status: 404,
    };
  } else {
    return rss({
      title: "David's Blog",
      description:
        "An outlet for stuff that fascinates me and stuff i want to share.",
      site: context.site,
      items: blog.map((post) => ({
        title: post.data.title,
        pubDate: post.data.publishDate,
        description: post.data.description,
        link: `blog/${post.slug}`,
      })),
    });
  }
}
