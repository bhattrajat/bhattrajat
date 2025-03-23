"use client";
import { startTransition, useEffect, useState } from "react";
import { ThemeSwitcher } from "./themeSwitcher";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LINKS = [
  {
    href: "/blog",
    name: "Blog",
  },
  {
    href: "/#experience",
    name: "Experience",
  },
  {
    href: "/#skills",
    name: "Skills",
  },
  {
    href: "/#projects",
    name: "Projects",
  },
  {
    href: "/#contact-me",
    name: "Contact Me",
  },
] as const;
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  //prevents scrolling when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-20 flex h-12 items-center justify-between border-b-2 border-slate-300 bg-white px-4 py-8 dark:bg-slate-950 md:p-8">
      <a
        className="absolute -top-full left-1/2 z-50 -translate-x-1/2 rounded px-4 py-2 transition-all focus:top-4 dark:bg-slate-950"
        href="#main"
      >
        Skip to content
      </a>
      <h1 className="relative z-40 text-2xl font-bold">
        <Link href="/#">Rajat Bhatt</Link>
      </h1>
      <nav className="flex items-center gap-4">
        <ThemeSwitcher />
        <button
          type="button"
          className="relative z-40 flex flex-col md:hidden"
          aria-controls="primary-menu"
          aria-expanded={isMenuOpen}
          onClick={() => startTransition(() => setIsMenuOpen((prev) => !prev))}
        >
          <div className="sr-only">Toggle menu</div>
          <div
            className={`h-1 w-6 bg-black dark:bg-slate-200 ${
              isMenuOpen
                ? "[translate:0_2px] [rotate:45deg] [transition:translate_0.1s_ease-in-out,_rotate_0.1s_ease-in-out_0.1s]"
                : "[translate:0_-4px] [transition:rotate_0.1s_ease-in,_translate_0.1s_ease-in_0.1s]"
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-black dark:bg-slate-200 ${
              isMenuOpen
                ? "[translate:0_-2px] [rotate:-45deg] [transition:translate_0.1s_ease-in-out,_rotate_0.1s_ease-in-out_0.1s]"
                : "[translate:0_4px] [transition:rotate_0.1s_ease-in,_translate_0.1s_ease-in_0.1s]"
            }`}
          ></div>
        </button>
        <ul
          id="primary-menu"
          className={`fixed inset-0 z-10 flex h-screen w-screen -translate-x-full flex-col gap-8 overflow-hidden bg-white p-4 pt-20 transition-transform dark:bg-slate-950 md:static md:h-auto md:w-auto md:translate-x-0 md:flex-row md:bg-inherit md:p-0 ${
            isMenuOpen ? "translate-x-0" : ""
          }`}
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                className={`border-slate-950 hover:border-b-2 dark:border-slate-50 ${
                  link.href === pathname ? "border-b-2" : ""
                }`}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
