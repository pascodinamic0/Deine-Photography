"use client";

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MarqueeImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  href?: string;
}

interface ImageMarqueeProps {
  images: MarqueeImage[];
  title: string;
  subtitle?: string;
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

export function ImageMarquee({
  images,
  title,
  subtitle,
  speed = 50,
  direction = 'left',
  pauseOnHover = true
}: ImageMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images, ...images];
  const totalWidth = duplicatedImages.length * 320; // Approximate width per image
  const duration = totalWidth / speed;

  const variants = {
    animate: {
      x: direction === 'left' ? -totalWidth / 3 : totalWidth / 3,
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: duration,
          ease: "linear" as const,
        },
      },
    },
    paused: {
      transition: {
        duration: 0,
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 overflow-hidden bg-background">
      <div className="container-luxury mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {subtitle && (
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">
              {subtitle}
            </p>
          )}
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            {title}
          </h2>
        </motion.div>
      </div>

      <div 
        ref={containerRef}
        className="relative"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6"
          variants={variants}
          animate={isPaused ? "paused" : "animate"}
          style={{ width: totalWidth }}
        >
          {duplicatedImages.map((image, index) => (
            <motion.div
              key={`${image.id}-${index}`}
              className="flex-shrink-0 relative group"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-80 h-96 overflow-hidden rounded-md border border-border group-hover:border-primary/50 transition-colors">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="text-xs font-medium tracking-widest uppercase text-primary">
                    {image.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold mt-1">
                    {image.title}
                  </h3>
                </div>
              </div>
              
              {image.href && (
                <Link 
                  href={image.href}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${image.title}`}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}