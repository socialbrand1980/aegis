import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { constantsByLanguage } from "@/lib/i18n-constants";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Panduan lengkap tata cara penggunaan Aegis AI dari setup sampai optimasi performa."
};

export default function ResourcesPage() {
  const constants = constantsByLanguage.id; // Use ID as default

  return (
    <section className="section-spacing">
      <Container>
        <h1 className="text-4xl font-bold text-white">Documentation</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Panduan operasional Aegis AI untuk implementasi client acquisition end-to-end: mulai dari konfigurasi awal,
          eksekusi outreach, pengelolaan percakapan, sampai evaluasi performa dashboard.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {constants.resourcePosts.map((post) => (
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
