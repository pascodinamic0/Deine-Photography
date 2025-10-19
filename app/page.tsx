import { Navigation } from '@/components/ui/navigation';
import { HeroSplit } from '@/components/HeroSplit';
import { ImageMarquee } from '@/components/ImageMarquee';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { PackageCards } from '@/components/PackageCards';
import { ContactForm } from '@/components/ContactForm';
import portfolioData from '@/data/portfolio.json';
import testimonialData from '@/data/testimonials.json';
import packageData from '@/data/packages.json';

// Sample marquee data - in production, this would come from your CMS
const celebrityImages = [
  {
    id: 'atlantis-royal-1',
    src: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg',
    alt: 'Celebrity arrival at Atlantis The Royal opening',
    title: 'Atlantis The Royal Opening',
    category: 'Red Carpet',
    href: '/portfolio/atlantis-the-royal-opening'
  },
  {
    id: 'melt-gala-1',
    src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
    alt: 'MELT Middle East gala coverage',
    title: 'MELT Middle East Gala',
    category: 'Celebrity',
    href: '/portfolio/melt-middle-east-event'
  },
  {
    id: 'rhod-shoot-1',
    src: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
    alt: 'Real Housewives of Dubai photoshoot',
    title: 'RHOD Portrait Session',
    category: 'Reality TV',
    href: '/portfolio/real-housewives-dubai-shoot'
  },
  {
    id: 'fashion-week-1',
    src: 'https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg',
    alt: 'Fashion week celebrity coverage',
    title: 'Dubai Fashion Week',
    category: 'Fashion',
    href: '/celebrities'
  }
];

const weddingImages = [
  {
    id: 'emirates-palace-wedding',
    src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
    alt: 'Luxury wedding at Emirates Palace',
    title: 'Emirates Palace Wedding',
    category: 'Luxury',
    href: '/portfolio/luxury-wedding-emirates-palace'
  },
  {
    id: 'burj-al-arab-wedding',
    src: 'https://images.pexels.com/photos/1024990/pexels-photo-1024990.jpeg',
    alt: 'Destination wedding at Burj Al Arab',
    title: 'Burj Al Arab Celebration',
    category: 'Destination',
    href: '/weddings'
  },
  {
    id: 'desert-wedding',
    src: 'https://images.pexels.com/photos/1444443/pexels-photo-1444443.jpeg',
    alt: 'Desert wedding photography Dubai',
    title: 'Desert Luxury Wedding',
    category: 'Desert',
    href: '/weddings'
  }
];

const portraitImages = [
  {
    id: 'burj-khalifa-portraits',
    src: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg',
    alt: 'Portrait session at Burj Khalifa',
    title: 'Burj Khalifa Portraits',
    category: 'Editorial',
    href: '/portfolio/dubai-fountain-portraits'
  },
  {
    id: 'dubai-marina-family',
    src: 'https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg',
    alt: 'Family portrait session Dubai Marina',
    title: 'Marina Family Session',
    category: 'Family',
    href: '/photoshoots'
  },
  {
    id: 'corporate-headshots',
    src: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg',
    alt: 'Corporate headshots Dubai',
    title: 'Executive Portraits',
    category: 'Corporate',
    href: '/photoshoots'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSplit
        title="💎 DUBAI'S PREMIER LENS 💎"
        subtitle="🎭 CELEBRITY • EDITORIAL • LUXURY 🎭"
        description="🌟 Crafting cinematic stories from Nordic light to Dubai glamour 🌟"
        primaryCTA={{
          text: "📸 CAPTURE MAGIC",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "🎬 VIEW STORIES",
          href: "/portfolio"
        }}
        image="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
        imageAlt="Professional photography session in Dubai"
        layout="left"
      />

      {/* Celebrity Marquee */}
      <ImageMarquee
        images={celebrityImages}
        title="🎭 CELEBRITY CHRONICLES 🎭"
        subtitle="✨ BEHIND THE SCENES ✨"
        speed={40}
        direction="right"
      />

      {/* Wedding Marquee */}
      <ImageMarquee
        images={weddingImages}
        title="💍 ETERNAL MOMENTS 💍"
        subtitle="🌹 LOVE STORIES 🌹"
        speed={35}
        direction="left"
      />

      {/* Portrait Marquee */}
      <ImageMarquee
        images={portraitImages}
        title="🖼️ PORTRAIT ARTISTRY 🖼️"
        subtitle="💫 PERSONAL NARRATIVES 💫"
        speed={45}
        direction="right"
      />

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-[#E8B4B8]/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/2 left-1/3 w-32 h-32 bg-[#E94560]/40 rounded-full blur-xl pulse-animation"></div>
        </div>
        
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-[#F5F5DC] mb-6 text-shadow">
              👑 ELITE CLIENTELE TRUST 👑
            </h2>
            <p className="text-[#F5F5DC] text-xl font-semibold max-w-2xl mx-auto">
              🌟 Digital Journal Featured • Celebrity Endorsed • Venue Approved 🌟
            </p>
          </div>
          
          {/* Logo Row - Placeholder for actual client logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <div className="text-[#E8B4B8] font-black text-xl neon-glow mb-2">📰</div>
              <div className="text-[#F5F5DC] font-semibold">Digital Journal</div>
            </div>
            <div className="text-center">
              <div className="text-[#0F3460] font-black text-xl mb-2">🏨</div>
              <div className="text-[#F5F5DC] font-semibold">Atlantis Royal</div>
            </div>
            <div className="text-center">
              <div className="text-[#E94560] font-black text-xl mb-2">👑</div>
              <div className="text-[#F5F5DC] font-semibold">Emirates Palace</div>
            </div>
            <div className="text-center">
              <div className="text-[#87A96B] font-black text-xl mb-2">🎭</div>
              <div className="text-[#F5F5DC] font-semibold">MELT Middle East</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel
        testimonials={testimonialData.testimonials}
        title="🗣️ CLIENT TESTIMONIALS 🗣️"
        subtitle="💎 AUTHENTIC VOICES 💎"
        autoPlay={true}
        interval={6000}
      />

      {/* Package Preview */}
      <PackageCards
        packages={packageData.weddingPackages}
        title="💍 WEDDING COLLECTIONS 💍"
        subtitle="🌟 PREMIUM EXPERIENCES 🌟"
      />

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-[#16213E] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#E8B4B8]/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-[#E94560]/20 to-transparent blur-3xl"></div>
        </div>
        
        <div className="container-luxury">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] border-t-4 border-[#E8B4B8] py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8B4B8]/10 to-transparent"></div>
        
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-3xl font-black text-[#E8B4B8] mb-2 neon-glow">
                💎 DEINE PHOTOGRAPHY 💎
              </div>
              <p className="text-[#F5F5DC] text-lg font-semibold">
                🎭 Celebrity & Luxury Photography • Dubai, UAE 🎭
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:hello@deine-photography.com"
                className="text-[#F5F5DC] hover:text-[#E8B4B8] transition-colors duration-300 text-lg font-semibold hover:neon-glow"
              >
                📧 Email
              </a>
              <a 
                href="https://wa.me/971XXXXXXXXX"
                className="text-[#F5F5DC] hover:text-[#87A96B] transition-colors duration-300 text-lg font-semibold hover:neon-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp
              </a>
              <a 
                href="https://instagram.com/deine.photography"
                className="text-[#F5F5DC] hover:text-[#E94560] transition-colors duration-300 text-lg font-semibold hover:neon-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                📸 Instagram
              </a>
            </div>
          </div>
          
          <div className="border-t-2 border-[#E8B4B8]/30 mt-8 pt-8 text-center">
            <p className="text-[#F5F5DC] text-base font-semibold">
              © 2024 Deine Photography 💫 Creating Magic Across Dubai & Beyond 💫
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}