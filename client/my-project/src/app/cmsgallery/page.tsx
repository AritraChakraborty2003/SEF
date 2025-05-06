"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Footer from "../Components/Footer";
import GalleryCMS from "./GalleryCMS";
import Navbar from "../Components/Navbar";

const Page = () => {
  const [showDonate, setShowDonate] = useState(false);
  return (
    <div>
      <Navbar onDonateClick={() => setShowDonate(true)} />
      <div className="lg:pt-20 lg:pb-20">
        <GalleryCMS />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
