/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import ContactUs from "../Components/ContactUs";
import NarrativeInfographic from "../Components/NarrativeInfograhic";
import ServicesSection from "../Components/ServicesSection";

// HERO SECTION COMPONENT
function AboutHero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <img
        src="/images/about111.jpeg" // Place your about hero image here
        alt="About Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-8xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We are dedicated to transforming education by empowering teachers,
          inspiring students, and strengthening communities.
        </p>
      </div>
    </section>
  );
}

// VISION & MISSION SECTION COMPONENT
function VisionMission() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="/images/vm.png" // Place your vision/mission image here
            alt="Vision and Mission"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
        {/* Right: Text */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
            Our Vision &amp; Mission
          </h2>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-black mb-2">Vision</h3>
            <p className="text-lg text-gray-800">
              To create a world where every child has access to quality
              education, guided by passionate and well-equipped teachers.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-black mb-2">Mission</h3>
            <p className="text-lg text-gray-800">
              We empower educators with innovative training, resources, and
              support, enabling them to inspire lifelong learning and positive
              change in their communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ABOUT PAGE
export default function Page() {
  const [showDonate, setShowDonate] = useState(false);
  return (
    <main>
      <Navbar onDonateClick={() => setShowDonate(true)} />
      <AboutHero />
      <VisionMission />

      <NarrativeInfographic />

      <ServicesSection />
      <ContactUs />
      <Footer />
    </main>
  );
}
