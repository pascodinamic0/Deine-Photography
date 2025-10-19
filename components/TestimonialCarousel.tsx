"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image?: string;
  location?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  title: string;
  subtitle?: string;
  autoPlay?: boolean;
  interval?: number;
}

export function TestimonialCarousel({
  testimonials,
  title,
  subtitle,
  autoPlay = true,
  interval = 5000
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, testimonials.length, interval, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-7 h-7 ${
          i < rating ? 'text-[#FFD700] fill-current neon-glow' : 'text-[#0A0A0A] border border-[#FFD700]/30'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-[#FFD700]/20 to-[#00D4FF]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-[#8B5CF6]/30 to-[#10B981]/30 rounded-full blur-2xl pulse-animation"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-[#FF6B9D]/25 to-[#FFD700]/25 rounded-full blur-xl animate-bounce"></div>
      </div>
      
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white text-shadow">
            {title}
          </h2>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(autoPlay)}
        >
          {/* Main carousel */}
          <div className="relative overflow-hidden rounded-xl border-4 border-[#FFD700] neon-glow">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] p-8 lg:p-12 rounded-xl relative"
              >
                {/* Quote icon */}
                <div className="absolute top-6 left-6 text-[#FFD700]/40">
                  <Quote className="w-16 h-16" />
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>

                  {/* Content */}
                  <blockquote className="text-2xl lg:text-3xl text-white leading-relaxed text-center mb-8 font-semibold text-shadow">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    {testimonials[currentIndex].image && (
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-[#FFD700] neon-glow">
                        <Image
                          src={testimonials[currentIndex].image!}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="text-center">
                      <div className="text-white font-black text-xl">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-[#FFD700] text-base font-semibold">
                        {testimonials[currentIndex].role}
                        {testimonials[currentIndex].company && (
                          <span className="text-white"> at {testimonials[currentIndex].company}</span>
                        )}
                      </div>
                      {testimonials[currentIndex].location && (
                        <div className="text-white text-sm mt-1 font-medium">
                          {testimonials[currentIndex].location}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/80 border-2 border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-black backdrop-blur-sm neon-glow w-12 h-12"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/80 border-2 border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-black backdrop-blur-sm neon-glow w-12 h-12"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#FFD700] scale-150 neon-glow'
                    : 'bg-[#0A0A0A] hover:bg-[#FFD700]/50 border-2 border-[#FFD700]/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Live region for screen readers */}
        <div 
          className="sr-only" 
          aria-live="polite" 
          aria-atomic="true"
        >
          Testimonial {currentIndex + 1} of {testimonials.length}: {testimonials[currentIndex].content}
        </div>
      </div>
    </section>
  );
}