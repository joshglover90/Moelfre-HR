"use client";

import { Bed, Bath, Users, Star, Wifi, Car, Waves, Flame, ChevronRight } from "lucide-react";

const properties = [
  {
    id: "ty-hir",
    name: "Ty Hir Caravan",
    description:
      "A beautifully presented caravan in a peaceful setting within walking distance of Moelfre village and the beach. Ideal for couples or a small family looking for a cosy coastal break.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80&auto=format&fit=crop",
    beds: 2,
    baths: 1,
    sleeps: 4,
    pricePerNight: null,
    rating: 5.0,
    reviews: null,
    amenities: ["wifi", "parking", "seaview"],
    tag: "Sleeps 4",
    tagColor: "bg-ocean-600",
  },
  {
    id: "seiriol",
    name: "Seiriol View Cottage",
    description:
      "A charming cottage with views towards Seiriol Island. Spacious and well-equipped, this is the perfect base for families wanting to make the most of Anglesey's spectacular coastline.",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80&auto=format&fit=crop",
    beds: 3,
    baths: 2,
    sleeps: 6,
    pricePerNight: null,
    rating: 5.0,
    reviews: null,
    amenities: ["wifi", "parking", "seaview", "fireplace"],
    tag: "Sleeps 6",
    tagColor: "bg-coastal-600",
  },
  {
    id: "rhos-fford",
    name: "No 1 Rhos Fford",
    description:
      "A comfortable and well-appointed holiday home right in the heart of Moelfre village. Seconds from the sea wall, local pub and shops — perfect for soaking up authentic Welsh village life.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format&fit=crop",
    beds: 2,
    baths: 1,
    sleeps: 4,
    pricePerNight: null,
    rating: 5.0,
    reviews: null,
    amenities: ["wifi", "parking"],
    tag: "Village centre",
    tagColor: "bg-navy-700",
  },
];

const amenityIcons: Record<string, { icon: React.FC<{ className?: string }>; label: string }> = {
  wifi: { icon: Wifi, label: "Wi-Fi" },
  parking: { icon: Car, label: "Parking" },
  seaview: { icon: Waves, label: "Sea view" },
  fireplace: { icon: Flame, label: "Fireplace" },
};

function PropertyCard({ property }: { property: (typeof properties)[0] }) {
  return (
    <div id={property.id} className="card group">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={`absolute top-4 left-4 ${property.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
        >
          {property.tag}
        </div>
        {property.pricePerNight && (
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
            <span className="text-navy-900 font-bold text-lg">
              £{property.pricePerNight}
            </span>
            <span className="text-navy-500 text-xs">/night</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {property.rating && (
          <div className="flex items-center gap-1.5 mb-2">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sm font-semibold text-navy-800">
              {property.rating.toFixed(1)}
            </span>
            {property.reviews && (
              <span className="text-sm text-navy-400">
                ({property.reviews} reviews)
              </span>
            )}
          </div>
        )}

        <h3 className="font-serif text-xl font-semibold text-navy-900 mb-2 leading-snug">
          {property.name}
        </h3>
        <p className="text-navy-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {property.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-navy-500 mb-4 pb-4 border-b border-sand-100">
          <span className="flex items-center gap-1.5">
            <Bed className="w-4 h-4" />
            {property.beds} bed{property.beds !== 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="w-4 h-4" />
            {property.baths} bath{property.baths !== 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            Sleeps {property.sleeps}
          </span>
        </div>

        {/* Amenities */}
        <div className="flex items-center gap-3 mb-5">
          {property.amenities.map((key) => {
            const amenity = amenityIcons[key];
            if (!amenity) return null;
            const Icon = amenity.icon;
            return (
              <div
                key={key}
                title={amenity.label}
                className="flex items-center gap-1 text-xs text-navy-500"
              >
                <Icon className="w-3.5 h-3.5 text-ocean-500" />
                <span>{amenity.label}</span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 w-full bg-[#1d3d5e] hover:bg-[#162d47] text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:shadow-md group/btn"
        >
          Enquire & Book
          <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-20 lg:py-28 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-8 bg-[#4a92ba]" />
            <span className="text-[#4a92ba] text-sm font-semibold uppercase tracking-widest">
              Our Properties
            </span>
          </div>
          <h2 className="section-heading mb-4">
            Three Carefully Selected
            <br />
            <span className="text-[#1d3d5e]">Holiday Homes</span>
          </h2>
          <p className="section-subheading">
            Each of our properties sits in the heart of Moelfre — chosen for
            their character, comfort, and closeness to the sea.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 text-center">
          <a href="#contact" className="btn-secondary">
            Enquire about availability
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
