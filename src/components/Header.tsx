"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Experience",
    "Portfolio",
    "Stack",
    "Contact",
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 md:px-14 py-4 flex justify-between items-center backdrop-blur-xl bg-black/70 border-b border-emerald-900/50">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">
        AzizbekDev
      </h1>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative text-emerald-300/80 hover:text-emerald-100 transition-colors group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-emerald-400 to-lime-400 group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </div>

      <button
        className="md:hidden text-emerald-400 p-2 rounded-lg hover:bg-emerald-900/30"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-[#00050a] border-l border-emerald-900/50 transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-emerald-900/40">
          <span className="text-xl font-bold text-emerald-300">Menu</span>
          <button
            onClick={closeMenu}
            className="text-emerald-400 p-2 rounded-lg hover:bg-emerald-900/30"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-8 gap-4">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              className="py-4 px-6 rounded-xl text-lg font-medium text-emerald-300 bg-black/40 border border-emerald-800/50 hover:border-emerald-500/70 hover:bg-emerald-950/40 transition-all"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
