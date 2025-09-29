"use client";

import { motion } from 'framer-motion';
import { Check, Star, Crown, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

interface PackageFeature {
  text: string;
  included: boolean;
}

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  mostPopular?: boolean;
  icon: 'heart' | 'star' | 'crown';
  buttonText?: string;
  buttonHref?: string;
}

interface PackageCardsProps {
  packages: Package[];
  title: string;
  subtitle?: string;
}

const iconMap = {
  heart: Heart,
  star: Star,
  crown: Crown,
};

export function PackageCards({ packages, title, subtitle }: PackageCardsProps) {
  return (
    <section className="py-16 lg:py-24 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#8B5CF6]/10"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00D4FF]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#10B981]/20 rounded-full blur-2xl pulse-animation"></div>
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
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 text-shadow">
            {title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = iconMap[pkg.icon];
            const isPopular = pkg.mostPopular;
            
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative transform hover:scale-105 transition-all duration-300"
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black px-6 py-3 rounded-full text-lg font-black neon-glow animate-pulse">
                      ⭐ MOST POPULAR ⭐
                    </div>
                  </div>
                )}

                <Card 
                  className={`h-full relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                    isPopular 
                      ? 'bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] border-[#FFD700] border-4 shadow-2xl neon-glow' 
                      : 'bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] border-[#00D4FF] border-2 hover:border-[#8B5CF6] hover:neon-glow'
                  }`}
                >
                  {/* Background pattern for popular card */}
                  {isPopular && (
                    <div className="absolute inset-0 opacity-20">
                      <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#FFD700_2px,transparent_2px)] bg-[length:30px_30px] animate-pulse" />
                    </div>
                  )}

                  <CardHeader className="text-center pb-6 relative">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                      isPopular ? 'bg-gradient-to-r from-[#FFD700] to-[#FFA500] neon-glow' : 'bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6]'
                    }`}>
                      <Icon className={`w-10 h-10 ${
                        isPopular ? 'text-black' : 'text-white'
                      }`} />
                    </div>
                    
                    <h3 className="text-3xl font-black text-white mb-4 text-shadow">
                      {pkg.name}
                    </h3>
                    
                    <p className="text-white text-base font-semibold leading-relaxed">
                      {pkg.description}
                    </p>
                    
                    <div className="mt-6">
                      <div className={`text-5xl font-black mb-3 ${
                        isPopular ? 'text-[#FFD700] neon-glow' : 'text-[#00D4FF]'
                      }`}>
                        {pkg.price}
                      </div>
                      {pkg.price !== '—' && (
                        <div className="text-white text-base font-semibold">
                          💎 Premium Investment
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                          className="flex items-start"
                        >
                          <Check className={`w-6 h-6 mr-4 mt-0.5 flex-shrink-0 ${
                            isPopular ? 'text-[#FFD700]' : 'text-[#10B981]'
                          }`} />
                          <span className="text-white text-base font-medium leading-relaxed">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="px-6 pb-6 mt-auto">
                    <Button 
                      asChild
                      className={`w-full font-semibold py-3 transition-all duration-300 ${
                        isPopular
                          ? 'bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black neon-glow'
                          : 'bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#00D4FF] text-white border-2 border-[#00D4FF]'
                      }`}
                    >
                      <Link href={pkg.buttonHref || '/contact'}>
                        🚀 {pkg.buttonText || 'START NOW'}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white text-xl font-semibold mb-8 max-w-2xl mx-auto">
            ✨ Custom packages available • Let's create magic together ✨
          </p>
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-black px-10 py-4 text-xl font-bold neon-glow transform hover:scale-105"
          >
            <Link href="/contact">
              💬 Let's Talk Custom
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}