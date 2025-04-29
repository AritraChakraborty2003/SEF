/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import React from "react";
import Hero from "../Components/General/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ServicesSection from "../Components/ServicesSection";
import ContactUs from "../Components/ContactUs";
import NarrativeInfographic from "../Components/NarrativeInfograhic";

const Page = () => {
  const [showDonate, setShowDonate] = useState(false);
  return (
    <div>
      <Navbar onDonateClick={() => setShowDonate(true)} />

      <Hero
        image="/images/teamq111.jpeg" // Place your image here
        title="Our Team"
        subtitle="Empowering educators and communities through impactful programs."
      />

      <main>
        <h1>Who are we?</h1>
        <p>Based on team data</p>
      </main>

      <NarrativeInfographic />
      <ServicesSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Page;
