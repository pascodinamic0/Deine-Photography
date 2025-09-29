"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

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
  image: string;
  imageAlt: string;
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
  layout = 'right'
}: HeroSplitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const contentOrder = layout === 'left' ? 'order-1 lg:order-2' : 'order-1 lg:order-1';
  const imageOrder = layout === 'left' ? 'order-2 lg:order-1' : 'order-2 lg:order-2';

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 luxury-gradient opacity-90" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-[#E8B4B8] to-[#0F3460] rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-[#E94560] to-[#87A96B] rounded-full opacity-35 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-[#F39C12] to-[#E8B4B8] rounded-full opacity-30 pulse-animation"></div>
      </div>
      
      {/* Content Container */}
      <motion.div 
        className="container-luxury py-20 lg:py-32 relative z-10"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div
            className={`space-y-8 ${contentOrder}`}
            initial={{ opacity: 0, x: layout === 'left' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center space-x-3"
              >
                <div className="w-20 h-1 bg-gradient-to-r from-[#E8B4B8] to-[#0F3460] neon-glow" />
                <span className="text-[#E8B4B8] text-lg font-black tracking-widest uppercase neon-glow">
                  {subtitle}
                </span>
                <div className="w-20 h-1 bg-gradient-to-r from-[#0F3460] to-[#E94560] neon-glow" />
              </motion.div>
            )}
            
            <motion.h1
              className="hero-text leading-tight text-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {title}
            </motion.h1>
            
            <motion.p
              className="text-xl lg:text-2xl text-[#F5F5DC] font-semibold leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {description}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#E8B4B8] to-[#F39C12] hover:from-[#F39C12] hover:to-[#E8B4B8] text-[#1A1A2E] font-black px-10 py-6 text-xl group transition-all duration-300 neon-glow transform hover:scale-105"
              >
                <Link href={primaryCTA.href} className="flex items-center">
                  {primaryCTA.text}
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              
              {secondaryCTA && (
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#0F3460] text-[#0F3460] hover:bg-[#0F3460] hover:text-[#F5F5DC] px-10 py-6 text-xl font-bold group transition-all duration-300 neon-glow transform hover:scale-105"
                >
                  <Link href={secondaryCTA.href} className="flex items-center">
                    <Play className="mr-3 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                    {secondaryCTA.text}
                  </Link>
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className={`relative ${imageOrder}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ y }}
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-lg shadow-2xl">
              {/* Gold border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#E8B4B8] via-[#0F3460] to-[#E94560] p-[4px] rounded-lg neon-glow">
                <div className="relative h-full w-full rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover transition-all duration-500 hover:scale-110 image-hover-effect"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-[#E8B4B8] to-[#0F3460] rounded-full blur-xl opacity-60"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            <motion.div
              className="absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-r from-[#E94560] to-[#87A96B] rounded-full blur-2xl opacity-50"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}