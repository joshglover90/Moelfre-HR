import { Search, CalendarCheck, Key, Smile } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Browse & Choose",
    description:
      "Explore our hand-picked properties and find the one that matches your needs — whether it's a romantic cottage for two or a manor for the whole family.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Check Availability",
    description:
      "Use our availability calendar or simply get in touch. We'll confirm dates, answer your questions, and provide a detailed quote with no hidden fees.",
  },
  {
    icon: Key,
    step: "03",
    title: "Book & Pay Securely",
    description:
      "A simple deposit secures your booking. The remainder is due 6 weeks before arrival. We accept all major cards and bank transfer.",
  },
  {
    icon: Smile,
    step: "04",
    title: "Arrive & Enjoy",
    description:
      "We'll meet you at the property, show you around, and make sure everything is perfect. Then it's time to relax and enjoy the best of Moelfre.",
  },
];

export default function BookingProcess() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-navy-900 to-ocean-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-ocean-400/60" />
            <span className="text-ocean-400 text-sm font-semibold uppercase tracking-widest">
              How It Works
            </span>
            <div className="h-px w-12 bg-ocean-400/60" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            Booking Is Simple
          </h2>
          <p className="text-navy-300 text-lg max-w-xl mx-auto">
            No platform complexity, no hidden fees — just a straightforward booking direct with your hosts.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-0 h-px bg-white/10 border-t border-dashed border-white/20" />
                )}

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-ocean-500/20 rounded-xl flex items-center justify-center border border-ocean-400/20">
                      <Icon className="w-6 h-6 text-ocean-300" />
                    </div>
                    <span className="font-serif text-5xl font-bold text-white/10 leading-none -mt-1">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-navy-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-navy-900 hover:bg-sand-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-base"
          >
            Start Your Booking
          </a>
          <p className="text-navy-400 text-sm mt-4">
            Or call Jeremy &amp; Martha on <a href="tel:07889401056" className="text-ocean-400 hover:text-ocean-300 underline underline-offset-2">07889 401056</a> — 9am to 9pm please.
          </p>
        </div>
      </div>
    </section>
  );
}
