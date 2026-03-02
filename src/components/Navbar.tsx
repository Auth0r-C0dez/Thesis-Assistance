"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const dissertationLinks = [
  { label: "Topic Selection", href: "/dissertation/topic-selection" },
  { label: "Proposal Writing", href: "/dissertation/proposal-writing" },
  { label: "Data Analysis", href: "/dissertation/data-analysis" },
];

const thesisLinks = [
  { label: "Synopsis", href: "/thesis/synopsis" },
  { label: "Full Thesis", href: "/thesis/full-thesis" },
  { label: "Editing", href: "/thesis/editing" },
];

const servicesLinks = [
  { label: "Plagiarism Check", href: "/services/plagiarism-check" },
  { label: "Journal Publication", href: "/services/journal-publication" },
  { label: "Formatting", href: "/services/formatting" },
];

function Dropdown({
  label,
  links,
  width = "w-56",
}: {
  label: string;
  links: { label: string; href: string }[];
  width?: string;
}) {
  return (
    <li className="relative group">
      <button className="flex items-center gap-1 font-medium text-white hover:text-accent transition whitespace-nowrap">
        {label}
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`absolute left-0 top-full mt-3 ${width} opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50`}
      >
        <div className="rounded-xl bg-slate-950 border border-white/10 shadow-xl p-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 rounded-lg text-sm text-white hover:bg-white/10 hover:text-accent transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white hover:text-accent transition">
          MyThesis
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg">
          <li>
            <Link href="/" className="text-white hover:text-accent transition whitespace-nowrap">
              Home
            </Link>
          </li>

          <Dropdown label="Dissertation" links={dissertationLinks} />
          <Dropdown label="Thesis" links={thesisLinks} />
          <Dropdown label="Other Services" links={servicesLinks} width="w-64" />

          <li>
            <Link href="/blog" className="text-white hover:text-accent transition whitespace-nowrap">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-accent transition whitespace-nowrap">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-white hover:text-accent transition whitespace-nowrap">
              Terms & Policies
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {[...dissertationLinks, ...thesisLinks, ...servicesLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-white hover:text-accent transition"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <hr className="border-white/10" />

            <Link href="/" className="block text-white">Home</Link>
            <Link href="/blog" className="block text-white">Blog</Link>
            <Link href="/contact" className="block text-white">Contact Us</Link>
            <Link href="/terms" className="block text-white">Terms & Policies</Link>
          </div>
        </div>
      )}
    </nav>
  );
}