"use client";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Services", href: "/services" },
];

interface NavbarProps {
  onDonateClick: () => void;
}

export default function Navbar({ onDonateClick }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-yellow-400 text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Left: Logo/Name */}
        <div className="font-bold text-2xl flex items-center h-16">
          <Image
            src={"/images/logoFinal.png"}
            alt="SEF Logo"
            height={50}
            width={60}
          />
        </div>
        {/* Right: Nav links (desktop) */}
        <div className="hidden md:flex items-center space-x-6 h-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
          <button
            className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
            onClick={onDonateClick}
          >
            Donate
          </button>
        </div>
        {/* Hamburger (mobile) */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-1 bg-black"></span>
          <span className="w-6 h-1 bg-black"></span>
          <span className="w-6 h-1 bg-black"></span>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-yellow-400 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 hover:text-white mt-2"
            >
              {link.name}
            </a>
          ))}
          <button
            className="w-full bg-black text-white px-4 py-2 rounded mt-2"
            onClick={onDonateClick}
          >
            Donate
          </button>
        </div>
      )}
    </nav>
  );
}
