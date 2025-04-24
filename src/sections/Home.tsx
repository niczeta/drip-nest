import { useLocation } from 'react-router-dom';
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { useEffect } from 'react';

export const Home = () => {
  const location = useLocation();

  // Scroll to the Contact section if the user came from clicking "Contact" in the navbar
  useEffect(() => {
    // Check if the location state has the scrollToContact flag
    if (location.state?.scrollToContact) {
      // Find the Contact section in the DOM
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        // Scroll smoothly to the Contact section
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]); // Dependency on location to trigger the effect whenever it changes

  return (
    <div>
      <Navbar />
      <Hero />
      <ContactSection />
      <Footer />
    </div>
  );
};
