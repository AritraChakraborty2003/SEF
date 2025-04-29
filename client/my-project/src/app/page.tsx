"use client";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import DonateModal from "./Components/DonateModal";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import AboutSection from "./Components/AboutSection";
import GallerySection from "./Components/Gallery";
import ServicesSection from "./Components/ServicesSection";
import ContactUs from "./Components/ContactUs";
export default function Home() {
  const [showDonate, setShowDonate] = useState(false);
  return (
    <>
      <Navbar onDonateClick={() => setShowDonate(true)} />
      <DonateModal open={showDonate} onClose={() => setShowDonate(false)} />
      <Hero onDonateClick={() => setShowDonate(true)} />
      <AboutSection />
      <GallerySection />

      <ServicesSection />

      <ContactUs />
      <Footer />

      {/* <Gallery /> */}
    </>
  );
}
