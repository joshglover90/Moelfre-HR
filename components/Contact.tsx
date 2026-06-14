"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    checkin: "",
    checkout: "",
    guests: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-8 bg-ocean-400" />
              <span className="text-ocean-600 text-sm font-semibold uppercase tracking-widest">
                Get In Touch
              </span>
            </div>
            <h2 className="section-heading mb-4">
              Ready to Book<br />
              <span className="text-ocean-600">Your Stay?</span>
            </h2>
            <p className="text-navy-600 leading-relaxed mb-8">
              Send us an enquiry and we'll get back to you within a few hours.
              We're happy to answer any questions and help you find the perfect
              property for your holiday.
            </p>

            <div className="space-y-5">
              <a
                href="tel:+441234567890"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center group-hover:bg-ocean-200 transition-colors">
                  <Phone className="w-5 h-5 text-ocean-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-navy-500 uppercase tracking-wider">
                    Phone
                  </div>
                  <div className="font-semibold text-navy-900 group-hover:text-ocean-600 transition-colors">
                    01248 XXX XXX
                  </div>
                </div>
              </a>

              <a
                href="mailto:hello@moelfreholidayrentals.co.uk"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center group-hover:bg-ocean-200 transition-colors">
                  <Mail className="w-5 h-5 text-ocean-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-navy-500 uppercase tracking-wider">
                    Email
                  </div>
                  <div className="font-semibold text-navy-900 group-hover:text-ocean-600 transition-colors text-sm">
                    hello@moelfreholidayrentals.co.uk
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-ocean-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-navy-500 uppercase tracking-wider">
                    Location
                  </div>
                  <div className="font-semibold text-navy-900">
                    Moelfre, Anglesey, LL72
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden h-48 bg-navy-100 relative">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=70&auto=format&fit=crop"
                alt="Map showing Moelfre location"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md">
                  <p className="text-navy-800 text-sm font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-ocean-600" />
                    Moelfre, Anglesey LL72
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-sm border border-sand-100 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-coastal-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-coastal-600" />
                  </div>
                  <h3 className="font-serif text-2xl text-navy-900 mb-2">
                    Thank you, {form.name.split(" ")[0]}!
                  </h3>
                  <p className="text-navy-600 max-w-sm">
                    We've received your enquiry and will be in touch within a few
                    hours. We look forward to welcoming you to Moelfre!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-2xl text-navy-900 mb-6">
                    Enquiry Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">
                        Your name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 border border-sand-200 rounded-xl text-navy-800 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all bg-sand-50 hover:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">
                        Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 border border-sand-200 rounded-xl text-navy-800 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all bg-sand-50 hover:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+44 XXXX XXXXXX"
                        className="w-full px-4 py-3 border border-sand-200 rounded-xl text-navy-800 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all bg-sand-50 hover:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">
                        Preferred property
                      </label>
                      <select
                        name="property"
                        value={form.property}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-sand-200 rounded-xl text-navy-800 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all bg-sand-50 hover:bg-white appearance-none"
                      >
                        <option value="">Any property</option>
                        <option>Ty Hir Caravan (sleeps 4)</option>
                        <option>Seiriol View Cottage (sleeps 6)</option>
                        <option>No 1 Rhos Fford (sleeps 4)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">
                        Check-in <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="checkin"
                        required
                        value={form.checkin}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-sand-200 rounded-xl text-navy-800 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all bg-sand-50 hover:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">
                        Check-out <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="checkout"
                        required
                        value={form.checkout}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-sand-200 rounded-xl text-navy-800 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all bg-sand-50 hover:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-700 mb-1.5">
                        Guests
                      </label>
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-sand-200 rounded-xl text-navy-800 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all bg-sand-50 hover:bg-white"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                        ))}
                        <option>10+ guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Any special requirements, questions, or anything you'd like us to know..."
                      className="w-full px-4 py-3 border border-sand-200 rounded-xl text-navy-800 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all resize-none bg-sand-50 hover:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-base"
                  >
                    <Send className="w-4 h-4" />
                    Send Enquiry
                  </button>

                  <p className="text-xs text-navy-400 text-center">
                    We'll respond within a few hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
