import { getPostBySlug, getAllPostSlugs } from "@/app/lib/posts"
import { Metadata } from "next"

interface Props {
  params: {
    slug: string
  }
}

// for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  return {
    title: post.metadata.title,
  }
}

// static paths
export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  return (
    <article>
      <h1>{post.metadata.title}</h1>
      <small>{post.metadata.date}</small>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  )
}
