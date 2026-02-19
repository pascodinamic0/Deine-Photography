"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/Footer';
import { ArrowRight, Camera, Award, Globe, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Norway → Dubai
              </p>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Capturing magic from Nordic light to Dubai glamour
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From Nordic light to Dubai glamour — creating cinematic stories for celebrities, couples, and brands. Trusted for red carpet, weddings, and editorial portraits across the UAE.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                <Link href="/contact" className="flex items-center gap-2">
                  Start your story
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                <Image
                  src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg"
                  alt="Deine Photography - Professional photographer portrait"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">The journey</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              From curiosity to craft
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-10">
            {[
              { year: '2010 · Norway', title: 'The beginning', body: 'Nordic light sparked the journey — capturing raw emotion in dramatic landscapes.', Icon: Camera, accent: true },
              { year: '2018 · Dubai', title: 'New horizons', body: "Dubai's luxury energy opened celebrity doors — from minimalism to opulence.", Icon: Globe, accent: false },
              { year: '2024 · Recognition', title: 'Featured & trusted', body: 'Digital Journal featured · Celebrity trusted · Atlantis Royal approved.', Icon: Award, accent: false },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${item.accent ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  <item.Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-primary text-sm font-medium mb-1">{item.year}</p>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                Philosophy & approach
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every frame tells a cinematic story — from red carpet energy to intimate vows. Technical precision meets human warmth to create timeless memories.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Authentic magic', desc: 'Genuine emotions that tell your story', Icon: Heart },
                { label: 'Excellence', desc: 'Uncompromising quality from start to finish', Icon: Award },
                { label: 'Cinematic vision', desc: 'Movie-quality depth and drama', Icon: Camera },
                { label: 'Global perspective', desc: 'International experience, fresh vision', Icon: Globe },
              ].map((card) => (
                <div
                  key={card.label}
                  className="p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <card.Icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{card.label}</h3>
                  <p className="text-muted-foreground text-sm">{card.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-card border-t border-border">
        <div className="container-luxury text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">Press</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured in Digital Journal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            &ldquo;Unique Nordic-Dubai fusion creating exceptional luxury imagery.&rdquo;
          </p>
          <p className="text-primary font-medium">Digital Journal</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container-luxury text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to create something amazing?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s talk. I&apos;d love to hear about your vision and how we can create timeless images together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              <Link href="/contact" className="flex items-center gap-2">
                Let&apos;s talk
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-muted font-medium">
              <Link href="/portfolio">View portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
