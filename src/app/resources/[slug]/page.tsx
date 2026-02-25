import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resourcePosts } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

type ResourceSlugPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return resourcePosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ResourceSlugPageProps): Promise<Metadata> {
  const post = resourcePosts.find((item) => item.slug === params.slug);

  if (!post) {
    return {
      title: "Resource Not Found"
    };
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default function ResourceSlugPage({ params }: ResourceSlugPageProps) {
  const post = resourcePosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <section className="section-spacing">
      <Container className="max-w-3xl">
        <p className="text-sm uppercase tracking-wide text-aegis-glow">{post.category}</p>
        <h1 className="mt-3 text-4xl font-bold text-white">{post.title}</h1>
        <p className="mt-3 text-sm text-slate-400">
          {post.date} • {post.readTime}
        </p>
        <article className="glass mt-8 p-6 text-slate-200">
          <p>{post.content}</p>
        </article>
      </Container>
    </section>
  );
}
