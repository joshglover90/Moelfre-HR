"use client";

import { useState } from "react";
import { Calendar, Users, Search } from "lucide-react";

export default function SearchBar() {
  const [guests, setGuests] = useState(2);

  return (
    <section className="relative z-10 -mt-px">
      <div className="bg-white border-b border-sand-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:items-end">
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {/* Check-in */}
              <div>
                <label className="block text-xs font-semibold text-navy-500 uppercase tracking-wider mb-1.5">
                  Check-in
                </label>
                <div className="relative">
                  <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400 pointer-events-none" />
                  <input
                    type="date"
                    className="w-full pl-8 pr-2 py-2.5 border border-sand-200 rounded-lg text-navy-800 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent bg-sand-50 hover:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div>
                <label className="block text-xs font-semibold text-navy-500 uppercase tracking-wider mb-1.5">
                  Check-out
                </label>
                <div className="relative">
                  <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400 pointer-events-none" />
                  <input
                    type="date"
                    className="w-full pl-8 pr-2 py-2.5 border border-sand-200 rounded-lg text-navy-800 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent bg-sand-50 hover:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Guests — full width on mobile, single col on md+ */}
              <div className="col-span-2 md:col-span-1">
                <label className="block text-xs font-semibold text-navy-500 uppercase tracking-wider mb-1.5">
                  Guests
                </label>
                <div className="flex items-center border border-sand-200 rounded-lg bg-sand-50 hover:bg-white transition-colors overflow-hidden">
                  <Users className="ml-2.5 shrink-0 w-4 h-4 text-navy-400" />
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="ml-auto px-3 py-2.5 text-navy-500 hover:text-navy-800 font-bold text-lg leading-none"
                    aria-label="Remove guest"
                  >
                    −
                  </button>
                  <span className="px-2 py-2.5 text-navy-800 text-sm font-medium min-w-[5rem] text-center select-none">
                    {guests} {guests === 1 ? "guest" : "guests"}
                  </span>
                  <button
                    onClick={() => setGuests(Math.min(16, guests + 1))}
                    className="px-3 py-2.5 text-navy-500 hover:text-navy-800 font-bold text-lg leading-none"
                    aria-label="Add guest"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Search button — full width on mobile */}
            <a
              href="#properties"
              className="flex items-center justify-center gap-2 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap w-full md:w-auto"
            >
              <Search className="w-4 h-4" />
              View Properties
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
