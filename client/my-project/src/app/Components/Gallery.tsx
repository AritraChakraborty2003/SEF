"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ScrollAnimate from "./General/Animate"; // Your animation wrapper!

const galleryData = [
  {
    image: "/images/ngo4.jpeg",
    title: "Teaching Students",
    description: "",
  },
  {
    image: "/images/ngo2.jpeg",
    title: "CSR Work",
    description: "We engage in CSR work and activities",
  },
  {
    image: "/images/ngo3.jpeg",
    title: "Woman Safety Campaign",
    description: "",
  },
  {
    image: "/images/ngo1.jpg",
    title: "Training Teachers",
    description: "",
  },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(1); // start with second image

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));

  const getIndex = (offset: number): number =>
    (current + offset + galleryData.length) % galleryData.length;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollAnimate direction="left">
          <h2 className="text-4xl text-yellow-500 font-bold mb-4 text-center">
            Our Gallery
          </h2>
          <div className="text-gray-500 mb-8 text-left text-sm font-semibold">
            featured / Images / {galleryData.length}
          </div>
        </ScrollAnimate>

        <ScrollAnimate direction="right">
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <button
              className="absolute left-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition hidden md:block"
              onClick={prev}
              aria-label="Previous"
            >
              <FaChevronLeft size={20} />
            </button>

            {/* Cards */}
            <div className="flex items-center justify-center w-full">
              {/* Left Small Card */}
              <GalleryCard
                {...galleryData[getIndex(-1)]}
                size="small"
                className="hidden md:block"
              />
              {/* Center Large Card */}
              <GalleryCard
                {...galleryData[getIndex(0)]}
                size="large"
                className=""
              />
              {/* Right Small Card */}
              <GalleryCard
                {...galleryData[getIndex(1)]}
                size="small"
                className="hidden md:block"
              />
            </div>

            {/* Right Arrow */}
            <button
              className="absolute right-0 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition hidden md:block"
              onClick={next}
              aria-label="Next"
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          {/* Mobile Arrows */}
          <div className="flex md:hidden justify-center gap-8 mt-4">
            <button
              className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
              onClick={prev}
              aria-label="Previous"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
              onClick={next}
              aria-label="Next"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}

interface GalleryCardProps {
  image: string;
  title: string;
  description: string;
  size?: "small" | "large";
  className?: string;
}

function GalleryCard({
  image,
  title,
  description,
  size = "small",
  className = "",
}: GalleryCardProps) {
  const base =
    "relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex-shrink-0";

  const sizeClass =
    size === "large"
      ? "w-[340px] h-[220px] md:w-[520px] md:h-[320px] mx-4 scale-105 z-10"
      : "w-[70vw] md:w-[260px] md:h-[180px] mx-2 opacity-70 z-0";

  return (
    <div className={`${base} ${sizeClass} ${className}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        draggable={false}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 px-4 py-3">
        <div className="font-bold text-lg md:text-xl text-gray-900">
          {title}
        </div>
        <div className="text-gray-700 text-sm md:text-base">{description}</div>
      </div>
    </div>
  );
}
