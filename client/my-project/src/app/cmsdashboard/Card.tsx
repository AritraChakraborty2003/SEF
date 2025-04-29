"use client";

import { useRouter } from "next/navigation";
import {
  FaInfoCircle,
  FaServicestack,
  FaImages,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";
import React from "react";

type CardProps = {
  title: string;
  link: string;
};

export default function Card({ title, link }: CardProps) {
  const router = useRouter();

  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "about":
        return (
          <FaInfoCircle size={50} className="mx-auto mb-4 text-yellow-500" />
        );
      case "services":
        return (
          <FaServicestack size={50} className="mx-auto mb-4 text-yellow-500" />
        );
      case "gallery":
        return <FaImages size={50} className="mx-auto mb-4 text-yellow-500" />;
      case "contact":
        return (
          <FaEnvelope size={50} className="mx-auto mb-4 text-yellow-500" />
        );
      case "teams": // ➡️ New Teams icon
        return <FaUsers size={50} className="mx-auto mb-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="w-[96vw] lg:w-[25vw] border border-black p-8 rounded-2xl shadow hover:shadow-xl cursor-pointer text-center bg-yellow-100 transition-transform hover:scale-105 flex flex-col justify-center"
      onClick={() => router.push(link)}
    >
      {getIcon(title)}
      <h2 className="text-2xl font-bold text-black">{title}</h2>
      <button className="p-2 mt-3 bg-black text-yellow-400">Manage</button>
    </div>
  );
}
