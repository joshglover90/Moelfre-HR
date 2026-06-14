"use client";

import { Anchor, Facebook, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
  properties: [
    "Ty Hir Caravan (sleeps 4)",
    "Seiriol View Cottage (sleeps 6)",
    "No 1 Rhos Fford (sleeps 4)",
  ],
  explore: [
    { label: "About Moelfre", href: "#location" },
    { label: "Things To Do", href: "#activities" },
    { label: "Getting Here", href: "#contact" },
    { label: "Local Recommendations", href: "#contact" },
  ],
  info: [
    { label: "How To Book", href: "#" },
    { label: "Cancellation Policy", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Gift Vouchers", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Newsletter bar */}
      <div className="border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl text-white mb-1">
                Get exclusive offers & local guides
              </h3>
              <p className="text-navy-400 text-sm">
                Join our mailing list for seasonal deals and Anglesey insider tips.
              </p>
            </div>
            <form
              className="flex gap-3 w-full max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-3 bg-navy-800 border border-navy-700 rounded-lg text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent text-sm"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-3 bg-ocean-600 hover:bg-ocean-500 text-white font-semibold rounded-lg text-sm transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="p-2 bg-ocean-600/20 rounded-lg">
                <Anchor className="w-5 h-5 text-ocean-400" />
              </div>
              <div>
                <div className="font-serif font-semibold text-lg text-white leading-none">
                  Moelfre
                </div>
                <div className="text-xs text-ocean-400 uppercase tracking-widest">
                  Holiday Rentals
                </div>
              </div>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed mb-6 max-w-xs">
              Quality holiday cottages in the heart of the Isle of Anglesey.
              Locally run, personally cared for, genuinely Welsh.
            </p>

            {/* Contact details */}
            <div className="space-y-3 text-sm mb-6">
              <a
                href="tel:+441234567890"
                className="flex items-center gap-3 text-navy-400 hover:text-ocean-400 transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                01248 XXX XXX
              </a>
              <a
                href="mailto:hello@moelfreholidayrentals.co.uk"
                className="flex items-center gap-3 text-navy-400 hover:text-ocean-400 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                hello@moelfreholidayrentals.co.uk
              </a>
              <div className="flex items-center gap-3 text-navy-400">
                <MapPin className="w-4 h-4 shrink-0" />
                Moelfre, Isle of Anglesey, LL72
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-navy-800 hover:bg-ocean-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-navy-800 hover:bg-ocean-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Properties */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Our Properties
            </h4>
            <ul className="space-y-3">
              {footerLinks.properties.map((prop) => (
                <li key={prop}>
                  <a
                    href="#properties"
                    className="text-navy-400 hover:text-ocean-400 text-sm transition-colors"
                  >
                    {prop}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-navy-400 hover:text-ocean-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Information
            </h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-navy-400 hover:text-ocean-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-navy-800">
              <p className="text-xs text-navy-500 mb-2">Member of:</p>
              <a
                href="https://visitwales.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-navy-400 hover:text-ocean-400 transition-colors"
              >
                Visit Wales <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-navy-500 text-xs">
            © {new Date().getFullYear()} Moelfre Holiday Rentals. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-navy-500">
            <a href="#" className="hover:text-ocean-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ocean-400 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-ocean-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
