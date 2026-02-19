import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Deine Photography — Celebrity & Portrait Photographer in Dubai',
    template: '%s | Deine Photography',
  },
  description:
    'Book a luxury photoshoot in Dubai with celebrity photographer Erick Deine. Specializing in portraits, weddings, and iconic Burj Khalifa sessions. View portfolio.',
  keywords: ['luxury photography Dubai', 'celebrity photographer Dubai', 'wedding photography Dubai', 'Burj Khalifa photoshoot', 'portrait photographer Dubai'],
  authors: [{ name: 'Deine Photography' }],
  creator: 'Deine Photography',
  publisher: 'Deine Photography',
  metadataBase: new URL('https://deinephotography.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://deinephotography.com',
    siteName: 'Deine Photography',
    title: 'Deine Photography — Celebrity & Portrait Photographer in Dubai',
    description: 'Book a luxury photoshoot in Dubai. Portraits, weddings, Burj Khalifa sessions.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Deine Photography - Celebrity & Portrait Photographer in Dubai' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deine Photography — Celebrity & Portrait Photographer in Dubai',
    description: 'Book a luxury photoshoot in Dubai. Portraits, weddings, Burj Khalifa sessions.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  verification: { google: 'your-google-verification-code' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Photographer", "LocalBusiness", "Person"],
              "@id": "https://deinephotography.com/#organization",
              name: "Deine Photography",
              description: "Celebrity and luxury portrait photographer based in Dubai, UAE. Specializing in portraits, weddings, Burj Khalifa photoshoots, and red carpet events.",
              url: "https://deinephotography.com",
              logo: "https://deinephotography.com/logo.png",
              image: "https://deinephotography.com/og-image.jpg",
              address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971501234567",
                contactType: "customer service",
                email: "hello@deinephotography.com",
                availableLanguage: ["English", "Arabic"],
                areaServed: "AE",
              },
              sameAs: [
                "https://instagram.com/deine.photography",
                "https://facebook.com/deine.photography",
              ],
              geo: { "@type": "GeoCoordinates", latitude: "25.2048", longitude: "55.2708" },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Photography Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Celebrity & Event Photography" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Wedding Photography" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Burj Khalifa Photoshoot" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portrait & Branding" } },
                ],
              },
            }),
          }}
        />
        
        {/* Analytics Placeholders */}
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=PIXEL_ID&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}