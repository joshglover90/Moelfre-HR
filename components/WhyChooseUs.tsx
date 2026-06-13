import { Heart, Award, Clock, MessageCircle, Key, MapPin } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Local Knowledge",
    description:
      "We're locals who love Moelfre deeply. Every property is personally chosen and we know every secret beach, walk, and café.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description:
      "Every property is personally inspected by us. We don't list anything we wouldn't stay in ourselves.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Clock,
    title: "Easy Booking",
    description:
      "Simple, transparent pricing — no hidden fees. Book directly with us and you'll never pay booking platform surcharges.",
    color: "text-ocean-500",
    bg: "bg-ocean-50",
  },
  {
    icon: MessageCircle,
    title: "Always Available",
    description:
      "Our local team is on hand throughout your stay. Any issue, any time — we're just a call away.",
    color: "text-coastal-600",
    bg: "bg-coastal-50",
  },
  {
    icon: Key,
    title: "Flexible Check-in",
    description:
      "We work around your travel plans. Flexible check-in times available on request — just ask.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "All properties are within a short walk of the sea, the village, and Moelfre's RNLI heritage centre.",
    color: "text-navy-600",
    bg: "bg-navy-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80&auto=format&fit=crop"
                    alt="Moelfre village"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&q=80&auto=format&fit=crop"
                    alt="Coastal path Anglesey"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80&auto=format&fit=crop"
                    alt="Beach Anglesey"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80&auto=format&fit=crop"
                    alt="Welsh countryside"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-5 border border-sand-100 max-w-[160px]">
              <div className="text-3xl font-serif font-bold text-navy-900">10+</div>
              <div className="text-sm text-navy-600 leading-tight mt-1">Years hosting happy guests</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-8 bg-ocean-400" />
              <span className="text-ocean-600 text-sm font-semibold uppercase tracking-widest">
                Why book with us
              </span>
            </div>
            <h2 className="section-heading mb-6">
              Book Direct,<br />
              <span className="text-ocean-600">Stay Better</span>
            </h2>
            <p className="text-navy-600 leading-relaxed mb-10">
              When you book directly with Moelfre Holiday Rentals, you get the
              personal touch that no big platform can offer — local expertise,
              genuine care, and the best available rates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4 group">
                    <div
                      className={`flex-shrink-0 w-10 h-10 ${feature.bg} ${feature.color} rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-navy-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
