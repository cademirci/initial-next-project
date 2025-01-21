import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "src/content")

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    metadata: data,
    contentHtml,
  }
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }))
}

export async function getAllPostsData() {
  const slugs = getAllPostSlugs()

  const posts = await Promise.all(
    slugs.map(async ({ slug }) => {
      const post = await getPostBySlug(slug)
      return {
        slug: post.slug,
        metadata: post.metadata,
        contentHtml: post.contentHtml,
      };
    })
  );

  return posts.sort((a, b) => {
    const dateA = new Date(a.metadata.date).getTime();
    const dateB = new Date(b.metadata.date).getTime();
    return dateB - dateA
  });
}
