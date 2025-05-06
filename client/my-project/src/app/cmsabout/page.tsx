"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutCMS from "./AboutCMS";

const Page = () => {
  const [showDonate, setShowDonate] = useState(false);
  return (
    <div>
      <Navbar onDonateClick={() => setShowDonate(true)} />
      <main className="lg:pb-20 lg:pt-20">
        <AboutCMS />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
