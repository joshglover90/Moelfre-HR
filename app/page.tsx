import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutMoelfre from "@/components/AboutMoelfre";
import Activities from "@/components/Activities";
import Testimonials from "@/components/Testimonials";
import BookingProcess from "@/components/BookingProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <SearchBar />
      <FeaturedProperties />
      <WhyChooseUs />
      <AboutMoelfre />
      <Activities />
      <Testimonials />
      <BookingProcess />
      <Contact />
      <Footer />
    </main>
  );
}
