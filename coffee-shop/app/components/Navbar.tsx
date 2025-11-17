"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Navigation links data
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="container-fluid w-full absolute top-0 left-0 z-50">
      <nav className="flex flex-wrap items-center justify-between px-4 py-3 lg:px-10">
        {/* Logo Section */}
        <Link href="/" className="text-decoration-none">
          <h1 className="m-0 text-3xl lg:text-5xl font-bold uppercase text-white font-heading">
            Next-Coffee
          </h1>
        </Link>

        {/* Mobile Toggler Button */}
        <button
          className="lg:hidden px-3 py-2 border rounded text-gray-400 border-gray-600 hover:text-white hover:border-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? "block bg-secondary" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto lg:bg-transparent transition-all duration-300`}
        >
          <div className="text-sm lg:flex-grow lg:flex lg:justify-end pt-4 lg:pt-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block mt-4 lg:inline-block lg:mt-0 text-white mr-6 font-bold text-lg uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? "text-primary" : "hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}