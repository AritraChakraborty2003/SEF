/* eslint-disable @next/next/no-html-link-for-pages */
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-yellow-400">
      <footer className=" text-black py-10 px-4 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
          {/* Left: NGO Name and Copyright */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">NGO Name</h2>
            <p className="mb-4">Empowering Change, One Step at a Time</p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-white transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-white transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-white transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-white transition">
                  Team
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Legal */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ngo.org"
                  className="hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="mt-8 border-t border-black/20 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} NGO Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
