import React from "react";
import {
  Github,
  Instagram,
  Linkedin,
  Send,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#00050a] border-t border-emerald-900/50 text-emerald-300/90">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">
              AzizbekDev
            </h3>
            <p className="text-sm text-emerald-300/70">
              Junior Front-End Developer — building modern and scalable web
              applications.
            </p>
            <div className="flex gap-5">
              <a href="https://github.com/A-Saydullayev" target="_blank">
                <Github />
              </a>
              <a
                href="https://instagram.com/azizbek___saydullayev"
                target="_blank"
              >
                <Instagram />
              </a>
              <a
                href="https://linkedin.com/in/azizbek-saydullayev"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a href="https://t.me/in_crease" target="_blank">
                <Send />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-200">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#experience">Experience</Link>
              </li>
              <li>
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="#stack">Stack</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-200">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone size={18} /> +998 (99) 012 73 31
              </li>
              <li className="flex gap-3">
                <Mail size={18} /> azizbeksaydullayv55@gmail.com
              </li>
              <li className="flex gap-3">
                <MapPin size={18} /> Tashkent, Uzbekistan
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-6 text-emerald-200">
              Ready for Projects
            </h4>
            <p className="text-sm text-emerald-300/70">
              Let’s build something great together.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-emerald-900/30 text-center text-sm text-emerald-400/60">
          © {currentYear} Azizbek Saydullayev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
