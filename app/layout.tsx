import './globals.css';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    default: 'Deine Photography - Celebrity & Luxury Photography in Dubai',
    template: '%s | Deine Photography'
  },
  description: 'Celebrity and luxury photographer based in Dubai. Capturing timeless moments for high-profile clients, weddings, and exclusive events with cinematic precision.',
  keywords: ['luxury photography Dubai', 'celebrity photographer', 'wedding photography Dubai', 'Burj Khalifa photoshoot', 'red carpet photography'],
  authors: [{ name: 'Deine Photography' }],
  creator: 'Deine Photography',
  publisher: 'Deine Photography',
  metadataBase: new URL('https://deine-photography.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://deine-photography.com',
    siteName: 'Deine Photography',
    title: 'Celebrity & Luxury Photography in Dubai',
    description: 'Capturing timeless moments for celebrities, luxury weddings, and exclusive events in Dubai and beyond.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deine Photography - Celebrity & Luxury Photography in Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celebrity & Luxury Photography in Dubai',
    description: 'Capturing timeless moments for celebrities, luxury weddings, and exclusive events in Dubai and beyond.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "@id": "https://deine-photography.com/#organization",
              name: "Deine Photography",
              description: "Celebrity and luxury photographer based in Dubai",
              url: "https://deine-photography.com",
              logo: "https://deine-photography.com/logo.png",
              image: "https://deine-photography.com/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "AE"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971-XX-XXX-XXXX",
                contactType: "customer service",
                availableLanguage: ["English", "Arabic"]
              },
              sameAs: [
                "https://instagram.com/deine.photography",
                "https://facebook.com/deine.photography"
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "25.2048",
                  longitude: "55.2708"
                },
                geoRadius: "100000"
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Photography Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Celebrity Photography",
                      description: "Professional red carpet and event photography for celebrities"
                    }
                  },
                  {
                    "@type": "Offer", 
                    itemOffered: {
                      "@type": "Service",
                      name: "Luxury Wedding Photography",
                      description: "Cinematic wedding photography for luxury celebrations"
                    }
                  }
                ]
              }
            })
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
      <body className="min-h-screen bg-[#0C0C0D] font-inter antialiased">
        {children}
      </body>
    </html>
  );
}