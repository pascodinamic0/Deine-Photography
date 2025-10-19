"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/ui/navigation';
import { ArrowRight, Camera, Award, Globe, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0C0C0D]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-16 h-1 bg-gradient-to-r from-[#FFD700] to-[#00D4FF] neon-glow" />
                <span className="text-[#FFD700] text-lg font-black tracking-widest uppercase neon-glow">
                  🇳🇴 NORWAY → DUBAI 🇦🇪
                </span>
                <div className="w-16 h-1 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] neon-glow" />
              </div>
              
              <h1 className="hero-text leading-tight text-shadow">
                ✨ CAPTURING MAGIC ✨
              </h1>
              
              <p className="text-xl lg:text-2xl text-white font-semibold leading-relaxed">
                🎬 From Nordic light to Dubai glamour - creating cinematic stories for celebrities & couples 🎬
              </p>
              
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-black px-10 py-6 text-xl group neon-glow transform hover:scale-105"
              >
                <Link href="/contact" className="flex items-center">
                  🚀 START YOUR STORY
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
            </motion.div>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#00D4FF] to-[#8B5CF6] p-[4px] rounded-lg neon-glow">
                  <div className="relative h-full w-full rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg"
                      alt="Deine Photography - Professional photographer portrait"
                      fill
                      className="object-cover transition-all duration-500 hover:scale-110 image-hover-effect"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-[#FFD700] to-[#00D4FF] rounded-full blur-xl opacity-60"
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 lg:py-24 bg-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-[#FFD700]/30 to-[#00D4FF]/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-[#8B5CF6]/40 to-[#10B981]/40 rounded-full blur-xl pulse-animation"></div>
        </div>
        
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#00D4FF] neon-glow" />
              <span className="text-[#FFD700] text-lg font-black tracking-widest uppercase neon-glow">
                🚀 THE JOURNEY 🚀
              </span>
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] neon-glow" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white text-shadow">
              ⭐ FROM CURIOSITY TO CRAFT ⭐
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* 2010 - Norway */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center neon-glow">
                  <Camera className="w-10 h-10 text-black" />
                </div>
                <div className="flex-1">
                  <div className="text-[#FFD700] font-black text-xl mb-2 neon-glow">🇳🇴 2010 - NORWAY</div>
                  <h3 className="text-2xl font-black text-white mb-3 text-shadow">✨ THE BEGINNING</h3>
                  <p className="text-white text-lg font-semibold leading-relaxed">
                    🎬 Nordic light magic sparked the journey - capturing raw emotion in dramatic landscapes 🎬
                  </p>
                </div>
              </motion.div>

              {/* Journey to Dubai */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] rounded-full flex items-center justify-center neon-glow">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-[#00D4FF] font-black text-xl mb-2 neon-glow">🇦🇪 2018 - DUBAI</div>
                  <h3 className="text-2xl font-black text-white mb-3 text-shadow">🌟 NEW HORIZONS</h3>
                  <p className="text-white text-lg font-semibold leading-relaxed">
                    🏙️ Dubai's luxury energy opened celebrity doors - from minimalism to opulence 🏙️
                  </p>
                </div>
              </motion.div>

              {/* Recognition */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-[#10B981] to-[#FF6B9D] rounded-full flex items-center justify-center neon-glow">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-[#10B981] font-black text-xl mb-2 neon-glow">🏆 2024 - RECOGNITION</div>
                  <h3 className="text-2xl font-black text-white mb-3 text-shadow">⭐ FEATURED & TRUSTED</h3>
                  <p className="text-white text-lg font-semibold leading-relaxed">
                    📰 Digital Journal featured • Celebrity trusted • Atlantis Royal approved 📰
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-black via-[#0A0A0A] to-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-[#8B5CF6]/20 to-[#FF6B9D]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-[#FFD700]/30 to-[#10B981]/30 rounded-full blur-2xl pulse-animation"></div>
        </div>
        
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-black text-white text-shadow">
                🎭 PHILOSOPHY & MAGIC 🎭
              </h2>
              <p className="text-xl text-white font-semibold leading-relaxed">
                ✨ Every frame tells a cinematic story - from red carpet electricity to intimate vows ✨
              </p>
              <p className="text-white text-lg font-medium leading-relaxed">
                🎬 Technical precision meets human warmth - creating timeless memories that exceed expectations 🎬
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] p-6 rounded-lg border-2 border-[#FFD700]/30 hover:border-[#FFD700] hover:neon-glow transition-all duration-300">
                  <Heart className="w-10 h-10 text-[#FFD700] mb-4 neon-glow" />
                  <h3 className="text-white font-black mb-2 text-lg">💖 AUTHENTIC MAGIC</h3>
                  <p className="text-white text-sm font-medium">Genuine emotions that tell your unique story</p>
                </div>
                <div className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] p-6 rounded-lg border-2 border-[#00D4FF]/30 hover:border-[#00D4FF] hover:neon-glow transition-all duration-300">
                  <Award className="w-10 h-10 text-[#00D4FF] mb-4 neon-glow" />
                  <h3 className="text-white font-black mb-2 text-lg">🏆 EXCELLENCE</h3>
                  <p className="text-white text-sm font-medium">Uncompromising quality from start to finish</p>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] p-6 rounded-lg border-2 border-[#8B5CF6]/30 hover:border-[#8B5CF6] hover:neon-glow transition-all duration-300">
                  <Camera className="w-10 h-10 text-[#8B5CF6] mb-4 neon-glow" />
                  <h3 className="text-white font-black mb-2 text-lg">🎬 CINEMATIC VISION</h3>
                  <p className="text-white text-sm font-medium">Movie-quality depth and drama</p>
                </div>
                <div className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] p-6 rounded-lg border-2 border-[#10B981]/30 hover:border-[#10B981] hover:neon-glow transition-all duration-300">
                  <Globe className="w-10 h-10 text-[#10B981] mb-4 neon-glow" />
                  <h3 className="text-white font-black mb-2 text-lg">🌍 GLOBAL PERSPECTIVE</h3>
                  <p className="text-white text-sm font-medium">International experience, fresh vision</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Press Mention */}
      <section className="py-16 lg:py-24 bg-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#FFD700]/20 via-[#00D4FF]/20 to-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-[#FFD700] to-[#00D4FF] neon-glow" />
              <span className="text-[#FFD700] text-lg font-black tracking-widest uppercase neon-glow">
                📰 PRESS RECOGNITION 📰
              </span>
              <div className="w-12 h-1 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] neon-glow" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 text-shadow">
              🏆 FEATURED IN DIGITAL JOURNAL 🏆
            </h2>
            <p className="text-white text-xl font-semibold max-w-3xl mx-auto leading-relaxed mb-8">
              ✨ "Unique Nordic-Dubai fusion creating exceptional luxury imagery" ✨
            </p>
            <div className="text-[#FFD700] font-black text-2xl neon-glow">📰 DIGITAL JOURNAL</div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-black via-[#0A0A0A] to-black relative overflow-hidden">
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
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 text-shadow">
              🚀 READY FOR MAGIC? 🚀
            </h2>
            <p className="text-xl text-white font-semibold mb-10 max-w-3xl mx-auto">
              ✨ Let's create cinematic memories that last forever ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-black px-10 py-6 text-xl group neon-glow transform hover:scale-105"
              >
                <Link href="/contact" className="flex items-center">
                  🚀 START YOUR PROJECT
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-black px-10 py-6 text-xl font-bold neon-glow transform hover:scale-105"
              >
                <Link href="/portfolio">
                  👁️ VIEW PORTFOLIO
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-4 border-[#FFD700] py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/10 to-transparent"></div>
        
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-3xl font-black text-[#FFD700] mb-2 neon-glow">
                ✨ DEINE PHOTOGRAPHY ✨
              </div>
              <p className="text-white text-lg font-semibold">
                🌟 Celebrity & Luxury Photography • Dubai, UAE 🌟
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:hello@deine-photography.com"
                className="text-white hover:text-[#FFD700] transition-colors duration-300 text-lg font-semibold hover:neon-glow"
              >
                📧 Email
              </a>
              <a 
                href="https://wa.me/971XXXXXXXXX"
                className="text-white hover:text-[#10B981] transition-colors duration-300 text-lg font-semibold hover:neon-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp
              </a>
              <a 
                href="https://instagram.com/deine.photography"
                className="text-white hover:text-[#FF6B9D] transition-colors duration-300 text-lg font-semibold hover:neon-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                📸 Instagram
              </a>
            </div>
          </div>
          
          <div className="border-t-2 border-[#FFD700]/30 mt-8 pt-8 text-center">
            <p className="text-white text-base font-semibold">
              © 2024 Deine Photography ✨ Creating Magic Across Dubai & Beyond ✨
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}