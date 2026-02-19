"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import portfolioData from '@/data/portfolio.json';

const CATEGORIES = [
  'All',
  'Portraits',
  'Weddings',
  'Celebrities',
  'Fashion',
  'Burj Khalifa',
] as const;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const items = useMemo(() => {
    const list = (portfolioData as { portfolioItems: Array<{ category: string; tags?: string[]; slug: string; title: string; summary: string; images: string[]; location: string }> }).portfolioItems;
    if (activeCategory === 'All') return list;
    if (activeCategory === 'Burj Khalifa') {
      return list.filter((i) => i.tags?.includes('Burj Khalifa') || i.title.toLowerCase().includes('burj'));
    }
    return list.filter((i) => i.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-12">
        <div className="container-luxury">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
            Portfolio
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-10">
            A selection of our work across portraits, weddings, celebrity events, and iconic Dubai locations.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {items.map((item, i) => (
                <motion.article
                  key={item.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <Link href={`/portfolio/${item.slug}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border">
                      <Image
                        src={item.images[0]}
                        alt={`${item.title} - ${item.category} photography Dubai by Deine Photography`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                        <span className="text-primary text-xs font-medium tracking-widest uppercase">{item.category}</span>
                        <h2 className="text-foreground font-semibold text-lg">{item.title}</h2>
                      </div>
                    </div>
                    <p className="mt-2 text-muted-foreground text-sm line-clamp-2">{item.summary}</p>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {items.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No projects in this category yet.</p>
          )}

          <div className="mt-16 text-center">
            <p className="text-foreground font-medium mb-4">Ready to create your own story?</p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              <Link href="/contact">Book a Session</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
