import {
  Waves,
  Fish,
  Bike,
  TreePine,
  Utensils,
  Camera,
  Sailboat,
  Mountain,
} from "lucide-react";

const activities = [
  {
    icon: Waves,
    title: "Swimming & Beaches",
    description: "Crystal-clear waters at Traeth Yr Ora, ideal for a summer dip.",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: Fish,
    title: "Sea Fishing",
    description: "Excellent bass, pollock and mackerel fishing from the rocks and local charter boats.",
    color: "from-teal-500/20 to-emerald-500/20 border-teal-200",
    iconColor: "text-teal-600",
  },
  {
    icon: Bike,
    title: "Cycling",
    description: "The 125-mile Lôn Las Cymru and flat coastal routes make Anglesey a cycling paradise.",
    color: "from-orange-500/20 to-amber-500/20 border-orange-200",
    iconColor: "text-orange-600",
  },
  {
    icon: Mountain,
    title: "Coastal Walking",
    description: "World-class cliff-top walks along the Anglesey Coastal Path with Snowdonia views.",
    color: "from-green-500/20 to-lime-500/20 border-green-200",
    iconColor: "text-green-600",
  },
  {
    icon: Sailboat,
    title: "Watersports",
    description: "Kayaking, paddleboarding, and sailing all available nearby in Beaumaris.",
    color: "from-sky-500/20 to-blue-500/20 border-sky-200",
    iconColor: "text-sky-600",
  },
  {
    icon: Camera,
    title: "Wildlife Watching",
    description: "Grey seals, red kites, puffins at South Stack, and bottlenose dolphins in the Menai Strait.",
    color: "from-violet-500/20 to-purple-500/20 border-violet-200",
    iconColor: "text-violet-600",
  },
  {
    icon: TreePine,
    title: "History & Heritage",
    description: "Beaumaris Castle (UNESCO), Barclodiad y Gawres burial chamber, and Plas Newydd.",
    color: "from-amber-500/20 to-yellow-500/20 border-amber-200",
    iconColor: "text-amber-700",
  },
  {
    icon: Utensils,
    title: "Food & Drink",
    description: "From The Kinmel Arms to Sosban — Anglesey's food scene punches well above its weight.",
    color: "from-rose-500/20 to-pink-500/20 border-rose-200",
    iconColor: "text-rose-600",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-20 lg:py-28 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-ocean-400" />
            <span className="text-ocean-600 text-sm font-semibold uppercase tracking-widest">
              Things To Do
            </span>
            <div className="h-px w-12 bg-ocean-400" />
          </div>
          <h2 className="section-heading mb-4">
            Adventures on Your
            <br />
            <span className="text-ocean-600">Doorstep</span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            Whether you're seeking action-packed days or peaceful relaxation, Moelfre
            and Anglesey have something for everyone.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.title}
                className={`bg-gradient-to-br ${activity.color} border rounded-2xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className={`${activity.iconColor} mb-3 transition-transform duration-200 group-hover:scale-110 inline-block`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{activity.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{activity.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-sand-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-navy-900 mb-2">
              Ready to plan your Anglesey adventure?
            </h3>
            <p className="text-navy-600">
              We can suggest itineraries, make restaurant reservations, and arrange local experiences.
            </p>
          </div>
          <a href="#contact" className="btn-primary whitespace-nowrap flex-shrink-0">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
