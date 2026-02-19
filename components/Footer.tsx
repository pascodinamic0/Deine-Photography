"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { Mail, MessageCircle, Phone, Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container-luxury">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-6 h-6 text-primary" />
              <span className="font-display text-lg font-semibold text-foreground tracking-tight">
                DEINE PHOTOGRAPHY
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{site.tagline}</p>
            <p className="text-muted-foreground/80 text-sm mt-2">{site.location}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase text-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" /> {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" /> {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href={site.urls.portfolio} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href={site.urls.about} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href={site.urls.burjKhalifaPackages} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Burj Khalifa Packages
                </Link>
              </li>
              <li>
                <Link href={site.urls.contact} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase text-foreground mb-4">
              Follow
            </h3>
            <div className="flex gap-6">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>{site.copyright}</p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
