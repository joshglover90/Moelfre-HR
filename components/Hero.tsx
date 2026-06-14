"use client";

import { useState } from "react";
import { ChevronDown, Star, MapPin, Shield } from "lucide-react";

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format&fit=crop"
          alt="Moelfre coastal scenery, Anglesey"
          className={`w-full h-full object-cover transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImgLoaded(true)}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-900/30 to-navy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/40 via-transparent to-transparent" />
        {/* Fallback gradient while image loads */}
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-ocean-800 to-coastal-900" />
        )}
      </div>

      {/* Content */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <MapPin className="w-4 h-4 text-sand-200" />
              <span className="text-white/90 text-sm font-medium">
                Moelfre, Isle of Anglesey, North Wales
              </span>
            </div>

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
            <div className="flex flex-wrap gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <a
                href="#properties"
                className="inline-flex items-center gap-2 bg-white text-navy-900 font-semibold px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-base"
              >
                View Properties
              </a>
              <a
                href="#location"
                className="btn-ghost text-base px-7 py-3.5"
              >
                Explore Anglesey
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-white/85 text-sm font-medium">5.0 · 40+ reviews</span>
              </div>
              <div className="w-px h-4 bg-white/30" />
              <div className="flex items-center gap-2 text-white/85 text-sm font-medium">
                <Shield className="w-4 h-4 text-coastal-300" />
                Secure booking
              </div>
              <div className="w-px h-4 bg-white/30" />
              <span className="text-white/85 text-sm font-medium">
                🏴󠁧󠁢󠁷󠁬󠁳󠁿 Local Welsh hosts
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-white/20">
            {[
              { value: "3", label: "Holiday homes" },
              { value: "Sleeps 14", label: "Combined capacity" },
              { value: "5★", label: "Average rating" },
              { value: "Moelfre", label: "Heart of the village" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:px-6">
                <div className="text-2xl font-serif font-semibold text-white">{stat.value}</div>
                <div className="text-white/70 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#properties"
        className="absolute bottom-28 right-8 hidden lg:flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors duration-200 group"
      >
        <span className="text-xs font-medium tracking-widest uppercase rotate-90 origin-center translate-y-4">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce mt-4" />
      </a>
    </section>
  );
}
