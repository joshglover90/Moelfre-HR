"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/moelfre-bay.jpg"
          alt="Moelfre bay and village, Anglesey"
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImgLoaded(true)}
        />
        {/* Dark overlay left→right so left-aligned text always has contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/60 to-navy-950/30" />
        {/* Extra darkening at top (nav area) and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-transparent to-navy-950/40" />
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-ocean-800 to-coastal-900" />
        )}
      </div>

      {/* Content */}
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-3xl">
            {/* Location badge — links to Google Maps */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Moelfre+Isle+of+Anglesey+Wales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 mb-6 animate-fade-in hover:bg-white/25 hover:border-white/40 transition-all duration-200"
            >
              <MapPin className="w-4 h-4 text-sand-200" />
              <span className="text-white/90 text-sm font-medium">
                Moelfre, Isle of Anglesey, North Wales
              </span>
            </a>

            {/* Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold text-white leading-[1.05] mb-6 animate-slide-up">
              Welcome to
              <br />
              <span className="text-sand-200 italic">Moelfre Holiday Rentals</span>
            </h1>

            <p className="text-xl text-white/85 leading-relaxed mb-4 max-w-xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Your perfect coastal escape awaits.
            </p>
            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl animate-slide-up" style={{ animationDelay: "0.15s" }}>
              Discover our three carefully selected holiday homes in the heart
              of Moelfre, offering comfort, coastal charm and the perfect base
              to explore Anglesey's stunning beaches, walks and seaside villages.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <a
                href="#properties"
                className="inline-flex items-center gap-2 bg-white text-navy-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base"
              >
                View Properties
              </a>
              <a
                href="#location"
                className="btn-ghost text-sm sm:text-base px-6 py-3"
              >
                Explore Anglesey
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#properties"
        className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors duration-200"
      >
        <span className="text-xs font-medium tracking-widest uppercase rotate-90 origin-center translate-y-4">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce mt-4" />
      </a>
    </section>
  );
}
