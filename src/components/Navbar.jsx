"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="border border-white/5">
      <nav className="container mx-auto flex justify-between items-center uppercase py-4 px-4 md:px-0 relative">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold uppercase">
            Pet<span className="text-[#d4a574]">Nest</span>
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="uppercase flex gap-16 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/shop">All Pets</Link>
            </li>
          </ul>
        </div>

        {/* Login */}
        <div className="hidden md:block">
          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 mx-4 rounded-full border"
          >
            {dark ? "☀ Light" : "🌙 Dark"}
          </button>

          <Link href="/login">Login</Link>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-16 left-0 w-full bg-[#d4a574] p-5 md:hidden">
            <ul className="flex flex-col gap-6 text-center uppercase">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/shop">All Pets </Link>
              </li>

              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
