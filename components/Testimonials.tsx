import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah & Tom H.",
    location: "Manchester",
    property: "The Old Fisherman's Cottage",
    rating: 5,
    date: "August 2024",
    text: "Simply magical. The cottage was even more beautiful than the photos — warm, characterful, and absolutely spotless. Moelfre itself is a hidden gem. We've already booked for next summer.",
    avatar: "ST",
    avatarColor: "bg-ocean-500",
  },
  {
    name: "David & Lucy M.",
    location: "Edinburgh",
    property: "Anglesey Coastal View",
    rating: 5,
    date: "July 2024",
    text: "The views from the living room are breathtaking. We watched seals from the window every morning! The hosts were incredibly helpful with local recommendations. Can't recommend highly enough.",
    avatar: "DL",
    avatarColor: "bg-coastal-600",
  },
  {
    name: "Emma R.",
    location: "London",
    property: "Seabird Retreat",
    rating: 5,
    date: "September 2024",
    text: "A perfect romantic escape. Tiny, cosy, and utterly charming. The coastal path right outside meant we walked every day. The local pub (Y Capel) was fantastic for evenings. Already missing it.",
    avatar: "ER",
    avatarColor: "bg-sand-500",
  },
  {
    name: "The Williams Family",
    location: "Birmingham",
    property: "Hen Blas — The Old Manor",
    rating: 5,
    date: "June 2024",
    text: "We had three generations under one roof and the manor accommodated everyone beautifully. The owners were brilliant — nothing was too much trouble. Anglesey is just stunning.",
    avatar: "WF",
    avatarColor: "bg-navy-600",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-8 bg-ocean-400" />
              <span className="text-ocean-600 text-sm font-semibold uppercase tracking-widest">
                Guest Reviews
              </span>
            </div>
            <h2 className="section-heading">
              What Our Guests
              <br />
              <span className="text-ocean-600">Are Saying</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right">
              <div className="text-5xl font-serif font-bold text-navy-900">5.0</div>
              <div className="flex justify-end mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-navy-500 text-sm mt-1">Based on 45+ reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="relative bg-sand-50 rounded-2xl p-7 border border-sand-100 hover:shadow-md transition-all duration-300 hover:border-sand-200"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-sand-300" />

              {/* Rating */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-navy-700 leading-relaxed mb-6 text-[15px]">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${review.avatarColor} rounded-full flex items-center justify-center text-white font-semibold text-sm`}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 text-sm">{review.name}</div>
                    <div className="text-navy-500 text-xs">{review.location}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-medium text-ocean-600 bg-ocean-50 px-2 py-1 rounded-md">
                    {review.property.split("—")[0].trim()}
                  </div>
                  <div className="text-xs text-navy-400 mt-1">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform logos */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 pt-10 border-t border-sand-200">
          <p className="text-navy-500 text-sm">Also reviewed on:</p>
          <div className="flex flex-wrap gap-6 items-center">
            {["Airbnb", "Booking.com", "TripAdvisor", "Google"].map((platform) => (
              <span
                key={platform}
                className="text-navy-400 font-medium text-sm hover:text-navy-700 transition-colors cursor-default"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
