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
        className={`w-5 h-5 ${i < rating ? 'text-primary fill-primary' : 'text-muted'}`}
      />
    ));
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
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

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(autoPlay)}
        >
          {/* Main carousel */}
          <div className="relative overflow-hidden rounded-lg border border-border bg-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-8 lg:p-12 relative"
              >
                <div className="absolute top-6 left-6 text-primary/30">
                  <Quote className="w-12 h-12" />
                </div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="flex gap-1">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>
                  <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed text-center mb-8 font-medium">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    {testimonials[currentIndex].image && (
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-border shrink-0">
                        <Image
                          src={testimonials[currentIndex].image!}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="text-center">
                      <div className="font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-primary text-sm font-medium">
                        {testimonials[currentIndex].role}
                        {testimonials[currentIndex].company && (
                          <span className="text-muted-foreground"> at {testimonials[currentIndex].company}</span>
                        )}
                      </div>
                      {testimonials[currentIndex].location && (
                        <div className="text-muted-foreground text-sm mt-0.5">
                          {testimonials[currentIndex].location}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/90 border-border text-foreground hover:bg-muted w-10 h-10 rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/90 border-border text-foreground hover:bg-muted w-10 h-10 rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/60'
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