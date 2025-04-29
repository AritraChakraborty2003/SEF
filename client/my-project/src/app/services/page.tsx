/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import React from "react";
import Hero from "../Components/General/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ServicesSection from "../Components/ServicesSection";
import ContactUs from "../Components/ContactUs";

const Page = () => {
  const [showDonate, setShowDonate] = useState(false);
  return (
    <div>
      <Navbar onDonateClick={() => setShowDonate(true)} />

      <Hero
        image="/images/service1111.webp" // Place your image here
        title="Our Services"
        subtitle="Empowering educators and communities through impactful programs."
      />
      <ServicesSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Page;
