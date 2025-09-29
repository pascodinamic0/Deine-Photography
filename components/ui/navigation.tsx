"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Camera } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Celebrities', href: '/celebrities' },
  { name: 'Weddings', href: '/weddings' },
  { name: 'Photoshoots', href: '/photoshoots' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Insights', href: '/insights' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-[#0C0C0D]/95 backdrop-blur-md border-b border-[#16171A]" 
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="container-luxury py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
              aria-label="Deine Photography Home"
            >
              <div className="relative">
                <Camera className="w-8 h-8 text-[#C8A96A] group-hover:text-[#D4B975] transition-colors duration-300" />
                <div className="absolute inset-0 bg-[#C8A96A] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-sm" />
              </div>
              <span className="text-xl font-bold text-[#EDEAE6] group-hover:text-[#C8A96A] transition-colors duration-300">
                DEINE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-300 hover:text-[#C8A96A]",
                    pathname === item.href 
                      ? "text-[#C8A96A]" 
                      : "text-[#EDEAE6]"
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C8A96A]"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                asChild
                className="bg-[#C8A96A] hover:bg-[#D4B975] text-[#0C0C0D] font-semibold px-6 py-2 transition-all duration-300"
              >
                <Link href="/contact">Book a Shoot</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#EDEAE6] hover:text-[#C8A96A] transition-colors duration-300"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              className="fixed top-0 right-0 z-50 h-full w-80 max-w-[80vw] bg-[#0C0C0D] border-l border-[#16171A] lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-[#16171A]">
                  <span className="text-lg font-bold text-[#C8A96A]">MENU</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-[#EDEAE6] hover:text-[#C8A96A] transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto py-6">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-6 py-4 text-lg font-medium transition-colors duration-300 hover:text-[#C8A96A] hover:bg-[#16171A]/50",
                          pathname === item.href 
                            ? "text-[#C8A96A] bg-[#16171A]/30" 
                            : "text-[#EDEAE6]"
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <div className="p-6 border-t border-[#16171A]">
                  <Button 
                    asChild
                    className="w-full bg-[#C8A96A] hover:bg-[#D4B975] text-[#0C0C0D] font-semibold"
                  >
                    <Link href="/contact">Book a Shoot</Link>
                  </Button>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}