/**
 * Central site configuration — single source for contact info and URLs.
 * Aligns with "Deine Photography Website Analysis and Fix" (professional email, WhatsApp, etc.)
 */
export const site = {
  name: 'Deine Photography',
  tagline: 'Celebrity & Luxury Portrait Photographer | Dubai, UAE',
  location: 'Dubai, UAE',
  /** Professional domain email (replace Gmail per PDF) */
  email: 'hello@deinephotography.com',
  /** Placeholder: replace with real number for tel: and WhatsApp */
  phone: '+971501234567',
  /** WhatsApp link with pre-filled message for Dubai market */
  whatsappNumber: '971501234567',
  whatsappMessage: "Hi Erick, I'm interested in booking a photoshoot!",
  get whatsappUrl(): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  social: {
    instagram: 'https://instagram.com/deine.photography',
    facebook: 'https://facebook.com/deine.photography',
  },
  urls: {
    portfolio: '/portfolio',
    contact: '/contact',
    about: '/about',
    burjKhalifaPackages: '/burj-khalifa-photoshoot-packages',
  },
  /** Copyright text for footer (PDF: "Copyright 2026 Deine Photography. All Rights Reserved.") */
  copyright: '© 2026 Deine Photography. All Rights Reserved.',
} as const;
