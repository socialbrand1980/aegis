import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { constantsByLanguage } from "@/lib/i18n-constants";

type ResourceSlugPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const constants = constantsByLanguage.id; // Use ID as default for static params
  return constants.resourcePosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ResourceSlugPageProps): Promise<Metadata> {
  const constants = constantsByLanguage.id; // Use ID as default for metadata
  const post = constants.resourcePosts.find((item) => item.slug === params.slug);

  if (!post) {
    return {
      title: "Documentation Not Found"
    };
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default function ResourceSlugPage({ params }: ResourceSlugPageProps) {
  const constants = constantsByLanguage.id; // Use ID as default
  const post = constants.resourcePosts.find((item) => item.slug === params.slug);
  
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
          <p className="whitespace-pre-line">{post.content}</p>
        </article>
      </Container>
    </section>
  );
}
