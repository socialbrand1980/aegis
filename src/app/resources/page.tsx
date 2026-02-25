import type { Metadata } from "next";
import Link from "next/link";
import { resourcePosts } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Resources",
  description: "Kumpulan playbook, analytics guide, dan best practice implementasi Aegis AI."
};

export default function ResourcesPage() {
  return (
    <section className="section-spacing">
      <Container>
        <h1 className="text-4xl font-bold text-white">Resources</h1>
        <p className="mt-3 max-w-2xl text-slate-300">Framework praktis untuk mengembangkan client acquisition infrastructure berbasis AI.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {resourcePosts.map((post) => (
            <Link key={post.slug} href={`/resources/${post.slug}`}>
              <Card className="h-full hover:border-aegis-glow/50">
                <p className="text-xs uppercase tracking-wide text-aegis-glow">{post.category}</p>
                <h2 className="mt-2 text-xl font-semibold text-white">{post.title}</h2>
                <p className="mt-3 text-sm text-slate-300">{post.excerpt}</p>
                <p className="mt-4 text-xs text-slate-400">
                  {post.date} • {post.readTime}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
