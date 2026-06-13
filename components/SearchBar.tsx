"use client";

import { useState } from "react";
import { Calendar, Users, Search } from "lucide-react";

export default function SearchBar() {
  const [guests, setGuests] = useState(2);

  return (
    <section className="relative z-10 -mt-px">
      <div className="bg-white border-b border-sand-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Check in */}
              <div>
                <label className="block text-xs font-semibold text-navy-500 uppercase tracking-wider mb-2">
                  Check-in
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-sand-200 rounded-lg text-navy-800 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent bg-sand-50 hover:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Check out */}
              <div>
                <label className="block text-xs font-semibold text-navy-500 uppercase tracking-wider mb-2">
                  Check-out
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-sand-200 rounded-lg text-navy-800 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent bg-sand-50 hover:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-xs font-semibold text-navy-500 uppercase tracking-wider mb-2">
                  Guests
                </label>
                <div className="relative flex items-center border border-sand-200 rounded-lg bg-sand-50 hover:bg-white transition-colors overflow-hidden">
                  <Users className="absolute left-3 w-4 h-4 text-navy-400" />
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="absolute right-10 py-3 px-2 text-navy-500 hover:text-navy-800 font-bold"
                  >
                    −
                  </button>
                  <span className="w-full pl-10 pr-16 py-3 text-navy-800 text-center select-none">
                    {guests} {guests === 1 ? "guest" : "guests"}
                  </span>
                  <button
                    onClick={() => setGuests(Math.min(16, guests + 1))}
                    className="absolute right-3 py-3 px-1 text-navy-500 hover:text-navy-800 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap">
              <Search className="w-4 h-4" />
              Search Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
