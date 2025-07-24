'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Recommendation', href: '#recommendation' },
  { label: 'Contact', href: '#contact' },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>('#home');

  useEffect(() => {
    const handleScroll = () => {
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top >= 0 && top < window.innerHeight / 2) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="w-60 bg-yellow-400 text-black min-h-screen flex flex-col items-center">
      {/* Avatar */}
      <Image
        src="/images/olenaCROP.jpg"
        alt="Olena Holub"
        width={80}
        height={80}
        className="mb-6 w-full shadow-lg"
      />

      {/* Navigation centered vertically */}
      <div className="flex-1 flex flex-col justify-center items-center text-sm font-semibold">
        {/* Top dot */}
        <div className="w-3 h-3 bg-black rounded-full mb-0.5" />

        {navItems.map((item) => (
          <div key={item.href} className="flex flex-col items-center">
            <div className="w-px h-5 bg-black" />
            <a
              href={item.href}
              className={`py-1 transition text-xl ${
                activeSection === item.href ? 'text-white' : 'text-black hover:text-white'
              }`}
            >
              {item.label}
            </a>
          </div>
        ))}

        {/* Bottom line and dot */}
        <div className="w-px h-5 bg-black mt-1" />
        <div className="w-3 h-3 bg-black rounded-full mt-0.5" />
      </div>

      {/* Language switch */}
      <div className="pt-6 text-sm space-x-2">
        <a href="/" lang="en">EN</a> / <a href="/" lang="es">ES</a>
      </div>
    </aside>
  );
}
