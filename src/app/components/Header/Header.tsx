"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

const Header: FC = () => {
  // State to control the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-8">
          <div className="flex gap-4 items-center">
            <Image
              src="/grupopermaneo_logo.webp"
              alt="Grupo Permaneo"
              width={70}
              height={70}
              className="rounded-full"
            />
            <h1 className="text-3xl font-black">Grupo Permaneo</h1>
          </div>

          {/* Button to toggle the menu on mobile */}
          <button className="lg:hidden text-3xl" onClick={toggleMenu}>
            ☰
          </button>

          {/* Nav menu */}
          <div
            className={`lg:flex ${
              isMenuOpen
                ? "block absolute z-10 px-2 py-4 bg-secondary max-w-11/12 left-5 top-28 w-full"
                : "hidden"
            }  gap-8`}
          >
            <nav>
              <ul className="lg:flex lg:gap-8 transition-all">
                <li>
                  <Link
                    href="/"
                    className="text-xl hover:text-primary transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/favorites"
                    className="text-xl hover:text-primary transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Favoritos
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
