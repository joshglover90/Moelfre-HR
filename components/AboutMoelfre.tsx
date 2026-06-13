import { Anchor, Bird, Waves, Mountain } from "lucide-react";

const highlights = [
  {
    icon: Anchor,
    title: "Rich Maritime Heritage",
    description:
      "Moelfre's RNLI lifeboat station is one of the most decorated in the UK, with the legendary Dick Evans among its heroes. The maritime museum is a must-visit.",
  },
  {
    icon: Waves,
    title: "Stunning Beaches",
    description:
      "Traeth Yr Ora is one of Anglesey's most beautiful and peaceful beaches — just minutes from the village. Benllech's award-winning Blue Flag beach is nearby.",
  },
  {
    icon: Bird,
    title: "Wildlife & Nature",
    description:
      "Grey seals bask on offshore rocks, red kites soar overhead, and the clear waters host an abundance of marine life. Seawatch Foundation operates locally.",
  },
  {
    icon: Mountain,
    title: "Coastal Walking",
    description:
      "The Isle of Anglesey Coastal Path passes right through Moelfre, offering dramatic clifftop walks with views to the Snowdonia mountains.",
  },
];

export default function AboutMoelfre() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-navy-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-ocean-400" />
            <span className="text-ocean-400 text-sm font-semibold uppercase tracking-widest">
              The Location
            </span>
            <div className="h-px w-12 bg-ocean-400" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            Why Moelfre?
          </h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Tucked on the east coast of the Isle of Anglesey, Moelfre is a
            timeless Welsh fishing village with a big heart and extraordinary natural beauty.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1520962880247-cfaf541c8724?w=900&q=85&auto=format&fit=crop"
              alt="Moelfre bay, Anglesey"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-serif text-xl italic">
                "One of Wales' most beautiful coastal villages"
              </p>
              <p className="text-white/70 text-sm mt-1">— The Guardian</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-navy-200 leading-relaxed text-lg mb-6">
              Just 15 minutes from the market town of Llangefni and an hour
              from the Menai Bridge, Moelfre combines total tranquility with
              easy access to everything Anglesey has to offer.
            </p>
            <p className="text-navy-300 leading-relaxed mb-8">
              The village itself is pure Wales — whitewashed cottages, a
              welcoming pub, a small shingle beach, and a community that has
              lived by the sea for centuries. Visitors return year after year
              because they simply can't stay away.
            </p>

            {/* Distance tags */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { place: "Moelfre Beach", dist: "2 min walk" },
                { place: "Traeth Yr Ora", dist: "10 min walk" },
                { place: "Benllech", dist: "5 min drive" },
                { place: "Beaumaris Castle", dist: "20 min drive" },
                { place: "Holyhead Ferry", dist: "45 min drive" },
                { place: "Snowdonia", dist: "60 min drive" },
              ].map((item) => (
                <div
                  key={item.place}
                  className="flex items-center justify-between bg-navy-800/60 rounded-lg px-4 py-3 border border-navy-700"
                >
                  <span className="text-white text-sm font-medium">{item.place}</span>
                  <span className="text-ocean-400 text-xs font-semibold">{item.dist}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title}
                className="bg-navy-800/50 border border-navy-700 rounded-2xl p-6 hover:bg-navy-800 transition-colors duration-300"
              >
                <div className="w-10 h-10 bg-ocean-600/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-ocean-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{h.title}</h3>
                <p className="text-navy-400 text-sm leading-relaxed">{h.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
