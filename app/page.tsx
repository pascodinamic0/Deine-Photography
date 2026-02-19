import Image from 'next/image';
import { Navigation } from '@/components/ui/navigation';
import { HeroSplit } from '@/components/HeroSplit';
import { ImageMarquee } from '@/components/ImageMarquee';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { PackageCards } from '@/components/PackageCards';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
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
      
      {/* Hero: client-facing; View Portfolio + Book a Session per PDF */}
      <HeroSplit
        title="Celebrity & Luxury Portrait Photography"
        subtitle="Celebrity & Luxury Portrait Photographer | Dubai, UAE"
        description="Cinematic stories from red carpet to intimate moments. Trusted by celebrities, couples, and brands across Dubai and the UAE."
        primaryCTA={{
          text: "View Portfolio",
          href: "/portfolio"
        }}
        secondaryCTA={{
          text: "Book a Session",
          href: "/contact"
        }}
        image="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
        imageAlt="Celebrity and luxury portrait photography in Dubai by Deine Photography"
        images={celebrityImages.map((img) => img.src)}
        layout="left"
      />

      {/* Service categories — client-facing */}
      <ImageMarquee
        images={celebrityImages}
        title="Celebrity & Events"
        subtitle="Red carpet and exclusive coverage"
        speed={40}
        direction="right"
      />

      <ImageMarquee
        images={weddingImages}
        title="Weddings"
        subtitle="Luxury wedding photography"
        speed={35}
        direction="left"
      />

      <ImageMarquee
        images={portraitImages}
        title="Portraits & Branding"
        subtitle="Personal and commercial"
        speed={45}
        direction="right"
      />

      {/* Social proof */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              As Seen In & Trusted By
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Digital Journal · Real Housewives of Dubai · Lotus Cars UAE · Atlantis The Royal · Emirates Palace · Forbes Magazine
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center justify-items-center text-muted-foreground">
            <div className="flex items-center justify-center w-full max-w-[200px] h-14">
              <Image src="https://www.digitaljournal.com/wp-content/uploads/2025/05/Digital-Journal-Logo-e1745859786345.png" alt="Digital Journal" width={240} height={60} className="object-contain w-auto h-10 md:h-12" />
            </div>
            <div className="flex items-center justify-center w-full max-w-[200px] h-14">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Atlantis_Bahamas_Logo.svg" alt="Atlantis The Royal" width={220} height={50} className="object-contain w-auto h-10 md:h-12" />
            </div>
            <div className="flex items-center justify-center w-full max-w-[200px] h-14">
              <Image src="/logos/emirates-palace.svg" alt="Emirates Palace" width={200} height={36} className="object-contain w-auto h-10 md:h-12" />
            </div>
            <div className="flex items-center justify-center w-full max-w-[200px] h-14">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/d/db/Forbes_logo.svg" alt="Forbes Magazine" width={200} height={54} className="object-contain w-auto h-10 md:h-12" />
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel
        testimonials={testimonialData.testimonials}
        title="Client Testimonials"
        subtitle="What our clients say"
        autoPlay={true}
        interval={6000}
      />

      <PackageCards
        packages={packageData.weddingPackages as { name: string; price: string; description: string; features: string[]; mostPopular?: boolean; icon: 'heart' | 'star' | 'crown'; buttonText?: string; buttonHref?: string }[]}
        title="Wedding Collections"
        subtitle="Premium experiences with clear Book Now"
      />

      <section className="py-20 lg:py-28 bg-background" id="contact">
        <div className="container-luxury">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}