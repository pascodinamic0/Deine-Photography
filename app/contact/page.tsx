import { Navigation } from '@/components/ui/navigation';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Book a Session',
  description: 'Book a luxury photoshoot in Dubai. Get in touch for weddings, portraits, celebrity events, and Burj Khalifa sessions.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Book Your Session
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tell us your date, vision, and venue. We&apos;ll craft a bespoke plan and make the extraordinary feel effortless.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
