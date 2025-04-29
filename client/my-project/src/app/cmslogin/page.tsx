/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Page = () => {
  const [showDonate, setShowDonate] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@example.com" && password === "admin") {
      router.push("/dashboard");
    } else {
      alert("Incorrect email or password!");
    }
  };

  return (
    <>
      <Navbar onDonateClick={() => setShowDonate(true)} />
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <div className="border-1 p-3 flex flex-col gap-y-8 w-[90vw] lg:w-[30vw] bg-gray-100">
          <h1 className="text-3xl font-bold mb-8 text-black text-center">
            Admin Login
          </h1>

          <input
            type="email"
            placeholder="Enter Email"
            className="p-3 border border-black rounded mb-4 w-[96%]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="p-3 border border-black rounded mb-4 w-[96%]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500"
          >
            Login
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
