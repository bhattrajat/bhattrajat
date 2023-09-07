"use client";
import { useEffect, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //prevents scrolling when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-20 flex h-12 items-center justify-between border-b-2 border-slate-300 bg-white px-4 py-6 md:p-8">
      <h1 className="relative z-40 text-2xl font-bold">
        <a href="/#">Rajat Bhatt</a>
      </h1>
      <nav>
        <button
          type="button"
          className="relative z-40 flex flex-col md:hidden"
          aria-controls="primary-menu"
          aria-expanded="false"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <div className="sr-only">Toggle Menu</div>
          <div
            className={`h-1 w-6 bg-black transition-transform ${
              isMenuOpen ? "translate-y-0.5 rotate-45" : "-translate-y-1"
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-black transition-transform ${
              isMenuOpen ? "-translate-y-0.5 -rotate-45" : "translate-y-1"
            }`}
          ></div>
        </button>
        <ul
          id="primary-menu"
          className={`fixed inset-0 z-10 flex h-screen w-screen -translate-x-full flex-col gap-4 overflow-hidden bg-white p-4 pt-16 transition-transform md:static md:h-auto md:w-auto md:translate-x-0 md:flex-row md:bg-inherit md:p-0 ${
            isMenuOpen ? "translate-x-0" : ""
          }`}
        >
          <li>
            <a
              className="border-slate-900 hover:border-b-2"
              href="#experience"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="border-slate-900 hover:border-b-2"
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="border-slate-900 hover:border-b-2"
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
            >
              Project
            </a>
          </li>
          <li>
            <a
              className="border-slate-900 hover:border-b-2"
              href="#contact-me"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
