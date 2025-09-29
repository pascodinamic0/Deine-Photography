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
          ease: "linear",
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
    <section className="py-16 lg:py-24 overflow-hidden bg-black relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-gradient-to-r from-[#FFD700]/30 to-[#00D4FF]/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-gradient-to-r from-[#8B5CF6]/40 to-[#10B981]/40 rounded-full blur-xl pulse-animation"></div>
      </div>
      
      <div className="container-luxury mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {subtitle && (
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#00D4FF] neon-glow" />
              <span className="text-[#FFD700] text-lg font-black tracking-widest uppercase neon-glow">
                {subtitle}
              </span>
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] neon-glow" />
            </div>
          )}
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 text-shadow">
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
              <div className="relative w-80 h-96 overflow-hidden rounded-lg shadow-2xl border-2 border-transparent group-hover:border-[#FFD700] group-hover:neon-glow">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-125 image-hover-effect"
                  sizes="320px"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Hover overlay with gold accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/0 via-[#00D4FF]/0 to-[#8B5CF6]/0 group-hover:from-[#FFD700]/20 group-hover:via-[#00D4FF]/10 group-hover:to-[#8B5CF6]/20 transition-all duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black text-sm font-black rounded-full neon-glow">
                        {image.category}
                      </div>
                    </div>
                    <h3 className="font-black text-xl leading-tight text-shadow">
                      {image.title}
                    </h3>
                  </div>
                </div>
                
                {/* Animated border effect on hover */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#FFD700] rounded-lg transition-all duration-300 group-hover:animate-pulse" />
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
        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}