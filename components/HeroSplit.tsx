"use client";

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

const HERO_IMAGE_INTERVAL_MS = 4500;

interface HeroSplitProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  /** Single image URL (used when images array is not provided) */
  image: string;
  imageAlt: string;
  /** Optional array of image URLs to shuffle/cycle through in the hero */
  images?: string[];
  layout?: 'left' | 'right';
}

export function HeroSplit({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  imageAlt,
  images: imagesProp,
  layout = 'right'
}: HeroSplitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImages = imagesProp && imagesProp.length > 0 ? imagesProp : [image];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, HERO_IMAGE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [heroImages.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const contentOrder = layout === 'left' ? 'order-1 lg:order-2' : 'order-1 lg:order-1';
  const imageOrder = layout === 'left' ? 'order-2 lg:order-1' : 'order-2 lg:order-2';

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <motion.div
        className="container-luxury py-20 lg:py-28 relative z-10"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[85vh]">
          <motion.div
            className={`space-y-8 ${contentOrder}`}
            initial={{ opacity: 0, x: layout === 'left' ? 24 : -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground"
              >
                {subtitle}
              </motion.p>
            )}
            <motion.h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-foreground tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {description}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-12 rounded-md transition-colors"
              >
                <Link href={primaryCTA.href} className="flex items-center gap-2">
                  {primaryCTA.text}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              {secondaryCTA && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border border-border text-foreground hover:bg-muted hover:text-foreground font-medium px-8 h-12 rounded-md"
                >
                  <Link href={secondaryCTA.href} className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    {secondaryCTA.text}
                  </Link>
                </Button>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            className={`relative ${imageOrder}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ y }}
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-md">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={heroImages[currentIndex]}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority={currentIndex === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
