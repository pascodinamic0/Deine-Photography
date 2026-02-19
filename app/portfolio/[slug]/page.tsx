import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import portfolioData from '@/data/portfolio.json';

type Item = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  images: string[];
  date: string;
  location: string;
  tags?: string[];
};

export async function generateStaticParams() {
  const items = (portfolioData as { portfolioItems: Item[] }).portfolioItems;
  return items.map((i) => ({ slug: i.slug }));
}

export default async function PortfolioItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const items = (portfolioData as { portfolioItems: Item[] }).portfolioItems;
  const item = items.find((i) => i.slug === slug);
  if (!item) notFound();

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-24 pb-16">
        <div className="container-luxury">
          <div className="mb-8">
            <Link href="/portfolio" className="text-primary hover:underline text-sm font-medium">
              ← Back to Portfolio
            </Link>
          </div>

          <header className="mb-10">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">{item.category}</span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-2">{item.title}</h1>
            <p className="text-muted-foreground mt-2">{item.location} · {item.date}</p>
          </header>

          <p className="text-lg text-foreground max-w-3xl mb-10">{item.summary}</p>
          <p className="text-muted-foreground mb-10">{item.description}</p>

          <div className="grid gap-4 mb-12">
            {item.images.map((src, i) => (
              <div key={i} className="relative aspect-[16/10] overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt={`${item.title} - image ${i + 1} - Deine Photography Dubai`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                />
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-foreground font-medium mb-4">Book a similar session</p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              <Link href="/contact">Book a Session</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
