"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Anchor, Phone } from "lucide-react";

const navLinks = [
  { href: "#properties", label: "Our Properties" },
  { href: "#ty-hir", label: "Ty Hir Caravan" },
  { href: "#seiriol", label: "Seiriol View" },
  { href: "#rhos-fford", label: "No 1 Rhos Fford" },
  { href: "#location", label: "Explore Anglesey" },
  { href: "#contact", label: "Contact Us" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className={`p-2 rounded-lg transition-colors duration-300 ${
                scrolled ? "bg-ocean-100 text-ocean-600" : "bg-white/20 text-white"
              }`}
            >
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <span
                className={`font-serif font-semibold text-lg leading-none block transition-colors duration-300 ${
                  scrolled ? "text-navy-900" : "text-white"
                }`}
              >
                Moelfre
              </span>
              <span
                className={`text-xs font-medium uppercase tracking-widest transition-colors duration-300 ${
                  scrolled ? "text-ocean-600" : "text-white/80"
                }`}
              >
                Holiday Rentals
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? "text-navy-700 hover:text-ocean-600 hover:bg-ocean-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:07889401056"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                scrolled ? "text-navy-600 hover:text-ocean-600" : "text-white/90 hover:text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>07889 401056</span>
            </a>
            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                scrolled
                  ? "bg-ocean-600 hover:bg-ocean-700 text-white"
                  : "bg-white text-navy-900 hover:bg-sand-50"
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled
                ? "text-navy-700 hover:bg-navy-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-sand-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-navy-700 font-medium hover:text-ocean-600 hover:bg-ocean-50 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-sand-100 flex flex-col gap-2">
            <a
              href="tel:07889401056"
              className="flex items-center gap-2 px-4 py-3 text-navy-600 font-medium"
            >
              <Phone className="w-4 h-4" />
              07889 401056
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary justify-center"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
