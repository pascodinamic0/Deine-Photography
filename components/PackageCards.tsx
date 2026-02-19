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
    <section className="py-20 lg:py-28 bg-card border-y border-border">
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
                className="relative"
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-primary text-primary-foreground text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <Card 
                  className={`h-full relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-colors ${
                    isPopular ? 'ring-1 ring-primary' : ''
                  }`}
                >
                  <CardHeader className="text-center pb-6 relative">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 ${
                      isPopular ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pkg.description}
                    </p>
                    <div className="mt-6">
                      <div className={`text-3xl font-bold ${isPopular ? 'text-primary' : 'text-foreground'}`}>
                        {pkg.price}
                      </div>
                      {pkg.price !== '—' && (
                        <div className="text-muted-foreground text-sm mt-1">Premium investment</div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.05) + (featureIndex * 0.03) }}
                          className="flex items-start gap-3"
                        >
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm leading-relaxed">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="px-6 pb-6 mt-auto">
                    <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                      <Link href={pkg.buttonHref || '/contact'}>
                        {pkg.buttonText || 'Book Now'}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-6 max-w-xl mx-auto">
            Custom packages available. Tell us your vision and we&apos;ll tailor a plan.
          </p>
          <Button asChild variant="outline" size="sm" className="border-border text-foreground hover:bg-muted font-medium">
            <Link href="/contact">Discuss custom package</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}