"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Footer from "../Components/Footer";
import GalleryCMS from "./GalleryCMS";
import { useRouter } from "next/navigation";
import axios from "axios";
import ProtectedRoute from "../General/ProtectedRoute";

const Page = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL_TEST}api/v1/admin/logout`,
        { withCredentials: true }
      );
      router.push("/cmslogin");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };
  return (
    <ProtectedRoute>
      <div>
        <div className=" bg-white">
          <nav className="bg-yellow-400 p-4 flex justify-between items-center">
            <h1 className="text-black text-2xl font-bold">CMS Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Logout
            </button>
          </nav>
        </div>
        <div className="lg:pt-20 lg:pb-20">
          <GalleryCMS />
        </div>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default Page;
