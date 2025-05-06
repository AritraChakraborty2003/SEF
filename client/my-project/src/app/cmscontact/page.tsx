/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import ContactCMS from "./ContactCMS";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Footer from "../Components/Footer";

const Page = () => {
  const [showDonate, setShowDonate] = useState(false);
  return (
    <div>
      <Navbar onDonateClick={() => setShowDonate(true)} />
      <ContactCMS />
      <Footer />
    </div>
  );
};

export default Page;
