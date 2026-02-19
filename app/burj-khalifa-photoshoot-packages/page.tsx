import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/Footer';
import { PackageCards } from '@/components/PackageCards';
import burjData from '@/data/burj-khalifa-packages.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Burj Khalifa Photoshoot Packages',
  description: 'Book an iconic Burj Khalifa photoshoot in Dubai. Silver, Gold, and Platinum packages with professional editing and fast delivery.',
};

// Map to PackageCards shape (icon required)
const packagesWithIcons = burjData.packages.map((p: { name: string; price: string; description: string; features: string[]; mostPopular?: boolean; buttonText: string; buttonHref: string }) => ({
  ...p,
  icon: p.name === 'Gold' ? 'star' as const : p.name === 'Platinum' ? 'crown' as const : 'heart' as const,
}));

export default function BurjKhalifaPackagesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-16">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Burj Khalifa Photoshoot Packages
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Iconic Dubai backdrop, professional editing, and clear pricing. One set of prices across the site.
            </p>
          </div>
          <PackageCards
            packages={packagesWithIcons}
            title="Choose Your Experience"
            subtitle="Standardized pricing — no surprises"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
